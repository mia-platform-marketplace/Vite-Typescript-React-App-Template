import {AliasToken, ComponentTokenMap} from 'antd/es/theme/interface'

export interface Colors {
  Base: {
    '*Client': {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '8': string
      '9': string
      '10': string
      '7_(main)': string
    }
    Blue: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Cyan: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Geekblue: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Gold: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Green: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Lime: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Magenta: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Orange: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Purple: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Red: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Volcano: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
    Yellow: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      '7': string
      '8': string
      '9': string
      '10': string
    }
  }
  Neutral: {
    Text: {
      colorText: string
      colorTextSecondary: string
      colorTextTertiary: string
      colorTextQuaternary: string
      colorTextLightSolid: string
      colorTextHeading: string
      colorTextLabel: string
      colorTextDescription: string
      colorTextDisabled: string
      colorTextPlaceholder: string
    }
    Icon: {
      colorIcon: string
      colorIconHover: string
    }
    Bg: {
      colorBgContainer: string
      colorBgElevated: string
      colorBgLayout: string
      colorBgMask: string
      colorBgSpotlight: string
      colorBgContainerDisabled: string
      colorBgTextActive: string
      colorBgTextHover: string
      colorBorderBg: string
    }
    Border: {
      colorBorder: string
      colorBorderSecondary: string
      colorSplit: string
    }
    Fill: {
      colorFill: string
      colorFillSecondary: string
      colorFillTertiary: string
      colorFillQuaternary: string
      colorFillContent: string
      colorFillContentHover: string
      colorFillAlter: string
      colorFillAlterSolid: string
    }
    colorWhite: string
    colorBgBase: string
    colorTextBase: string
    transparent: string
  }
  Brand: {
    Primary: {
      colorPrimary: string
      colorPrimaryBg: string
      colorPrimaryBgHover: string
      colorPrimaryBorder: string
      colorPrimaryBorderHover: string
      colorPrimaryHover: string
      colorPrimaryActive: string
      colorPrimaryTextHover: string
      colorPrimaryText: string
      colorPrimaryTextActive: string
    }
    Success: {
      colorSuccess: string
      colorSuccessBg: string
      colorSuccessBgHover: string
      colorSuccessBorder: string
      colorSuccessBorderHover: string
      colorSuccessHover: string
      colorSuccessActive: string
      colorSuccessTextHover: string
      colorSuccessText: string
      colorSuccessTextActive: string
    }
    Warning: {
      colorWarning: string
      colorWarningBg: string
      colorWarningBgHover: string
      colorWarningBorder: string
      colorWarningBorderHover: string
      colorWarningHover: string
      colorWarningActive: string
      colorWarningTextHover: string
      colorWarningText: string
      colorWarningTextActive: string
      colorWarningOutline: string
    }
    Info: {
      colorInfo: string
      colorInfoBg: string
      colorInfoBgHover: string
      colorInfoBorder: string
      colorInfoBorderHover: string
      colorInfoHover: string
      colorInfoActive: string
      colorInfoTextHover: string
      colorInfoText: string
      colorInfoTextActive: string
    }
    Error: {
      colorError: string
      colorErrorBg: string
      colorErrorBgHover: string
      colorErrorBorder: string
      colorErrorBorderHover: string
      colorErrorHover: string
      colorErrorActive: string
      colorErrorTextHover: string
      colorErrorText: string
      colorErrorTextActive: string
      colorErrorOutline: string
    }
    Link: {
      colorLink: string
      colorLinkHover: string
      colorLinkActive: string
    }
    Control: {
      controlItemBgActive: string
      controlItemBgActiveDisabled: string
      controlItemBgActiveHover: string
      controlItemBgHover: string
      controlOutline: string
      controlTmpOutline: string
    }
  }
}

export interface Typography {
  Font_Family: {
    fontFamily: string
    fontFamilyCode: string
  }
  Font_Size: {
    fontSize: number
    fontSizeLG: number
    fontSizeSM: number
    fontSizeXL: number
    fontSizeHeading1: number
    fontSizeHeading2: number
    fontSizeHeading3: number
    fontSizeHeading4: number
    fontSizeHeading5: number
    fontSizeIcon: number
  }
  Line_Height: {
    lineHeight: number
    lineHeightLG: number
    lineHeightSM: number
    lineHeightHeading1: number
    lineHeightHeading2: number
    lineHeightHeading3: number
    lineHeightHeading4: number
    lineHeightHeading5: number
  }
  Font_Weight: {
    fontWeightNormal: number
    fontWeightStrong: number
  }
}

export interface Dimensions {
  Size: {
    sizeStep: number
    sizeUnit: number
    controlInteractiveSize: number
    sizePopupArrow: number
    Base: {
      sizeXXS: number
      sizeXS: number
      sizeSM: number
      size: number
      sizeMS: number
      sizeMD: number
      sizeLG: number
      sizeXL: number
      sizeXXL: number
    }
    Height: {
      controlHeight: number
      controlHeightXL: number
      controlHeightLG: number
      controlHeightSM: number
      controlHeightXS: number
    }
    Line_Width: {
      lineWidth: number
      lineWidthBold: number
      lineWidthFocus: number
      controlOutlineWidth: number
    }
    Screen_Size: {
      screenLG: number
      screenLGMax: number
      screenLGMin: number
      screenMD: number
      screenMDMax: number
      screenMDMin: number
      screenSM: number
      screenSMMax: number
      screenSMMin: number
      screenXL: number
      screenXLMax: number
      screenXLMin: number
      screenXS: number
      screenXSMax: number
      screenXSMin: number
      screenXXL: number
      screenXXLMin: number
    }
  }
  Space: {
    Margin: {
      margin: number
      marginLG: number
      marginMD: number
      marginSM: number
      marginXL: number
      marginXS: number
      marginXXL: number
      marginXXS: number
    }
    Padding: {
      padding: number
      paddingLG: number
      paddingMD: number
      paddingSM: number
      paddingXL: number
      paddingXS: number
      paddingXXS: number
      paddingContentHorizontal: number
      paddingContentHorizontalLG: number
      paddingContentHorizontalSM: number
      paddingContentVertical: number
      paddingContentVerticalLG: number
      paddingContentVerticalSM: number
      controlPaddingHorizontal: number
      controlPaddingHorizontalSM: number
    }
  }
  Border_Radius: {
    borderRadius: number
    borderRadiusLG: number
    borderRadiusSM: number
    borderRadiusXS: number
    borderRadiusXL: number
  }
}

export type Components = {
  [key in keyof ComponentTokenMap]: {
    Component: ComponentTokenMap[key]
    Global: Partial<AliasToken>
  }
}

export interface Theme {
  Colors: Colors,
  Typography: Typography,
  Dimensions: Dimensions,
  Components: Components,
}
