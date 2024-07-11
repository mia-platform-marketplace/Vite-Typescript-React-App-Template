import importDesignTokens from 'src/theme/utils/importDesignTokens.ts'
import DimensionsDefault from 'src/assets/themes/2. Dimensions.Default.tokens.json'
import DimensionsCompact from 'src/assets/themes/2. Dimensions.Compact.tokens.json'
import {Dimensions} from 'src/types/theme'

const dimensions = {
  default: importDesignTokens<Dimensions>(DimensionsDefault),
  compact: importDesignTokens<Dimensions>(DimensionsCompact)
}

export default (variant: 'default' | 'compact') : Dimensions => {
  return dimensions[variant]
}
