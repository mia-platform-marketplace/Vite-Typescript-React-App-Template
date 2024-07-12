import importDesignTokens from 'src/theme/utils/importDesignTokens.ts'
import ComponentsStandard from 'src/assets/themes/4. Components.Standard.tokens.json'
import ComponentsAlternate from 'src/assets/themes/4. Components.Alternate.tokens.json'
import Colors from 'src/theme/Colors.ts'
import Typography from 'src/theme/Typography.ts'
import Dimensions from 'src/theme/Dimensions.ts'
import {Components} from 'src/types/theme'

const components = {
  standard: ComponentsStandard,
  alternate: ComponentsAlternate
}

export default (
  {
    variant,
    colors: colorVariant,
    typography: typographyVariant,
    dimensions: dimensionsVariant
  }: {
    variant: 'standard' | 'alternate'
    colors: 'standard' | 'alternate'
    typography: 'default' | 'compact'
    dimensions: 'default' | 'compact'
  }): Components => {
  return importDesignTokens<{Components: Components}>(
    components[variant], {
      Colors: Colors(colorVariant),
      Typography: Typography(typographyVariant),
      ...Dimensions(dimensionsVariant)
    }).Components
}
