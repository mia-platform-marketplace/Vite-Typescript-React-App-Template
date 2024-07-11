import importDesignTokens from 'src/theme/utils/importDesignTokens.ts'
import TypographyDefault from 'src/assets/themes/3. Typography.Default.tokens.json'
import TypographyCompact from 'src/assets/themes/3. Typography.Compact.tokens.json'
import {Typography} from 'src/types/theme'

const typography = {
  default: importDesignTokens<{Typography: Typography}>(TypographyDefault),
  compact: importDesignTokens<{Typography: Typography}>(TypographyCompact)
}

export default (variant: 'default' | 'compact') : Typography => {
  return typography[variant].Typography
}
