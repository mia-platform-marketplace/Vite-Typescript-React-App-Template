import {ThemeConfig} from 'antd'
import {mapValues} from 'lodash'
import {Colors, Components, Dimensions, Theme, Typography} from 'src/types/theme'
import {AliasToken} from 'antd/es/theme/interface'

function createColors (colors: Colors): Partial<AliasToken> {
  return {
    ...colors.Brand.Primary,
    ...colors.Brand.Success,
    ...colors.Brand.Info,
    ...colors.Brand.Warning,
    ...colors.Brand.Error,
    ...colors.Brand.Link,
    ...colors.Neutral.Bg,
    ...colors.Neutral.Fill,
    ...colors.Neutral.Icon,
    ...colors.Neutral.Text,
    colorBgBase: colors.Neutral.colorBgBase,
    colorTextBase: colors.Neutral.colorTextBase,
    colorWhite: colors.Neutral.colorWhite
  }
}

function createTypography (typography: Typography): Partial<AliasToken> {
  return {
    ...typography.Font_Family,
    ...typography.Font_Size,
    ...typography.Font_Weight,
    ...typography.Line_Height
  }
}

function createDimensions (dimensions: Dimensions): Partial<AliasToken> {
  return {
    ...dimensions.Size.Base,
    ...dimensions.Size.Height,
    ...dimensions.Size.Screen_Size,
    ...dimensions.Size.Line_Width,
    ...dimensions.Space.Padding,
    ...dimensions.Space.Margin,
    ...dimensions.Border_Radius,
    controlInteractiveSize: dimensions.Size.controlInteractiveSize,
    sizePopupArrow: dimensions.Size.sizePopupArrow,
    sizeStep: dimensions.Size.sizeStep,
    sizeUnit: dimensions.Size.sizeUnit

  }
}

function createComponents (components: Components): ThemeConfig['components'] {
  return mapValues(components as any, ({Global, Component}) => {
    return {...Global, ...Component}
  })
}

export default ({Colors, Typography, Dimensions, Components}: Theme): ThemeConfig => {
  return {
    components: createComponents(Components),
    token: {
      ...createColors(Colors),
      ...createTypography(Typography),
      ...createDimensions(Dimensions)
    }
  }
}
