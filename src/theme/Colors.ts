import importDesignTokens from 'src/theme/utils/importDesignTokens'
import ColorsStandard from 'src/assets/themes/1. Colors.Standard.tokens.json'
import ColorsAlternate from 'src/assets/themes/1. Colors.Alternate.tokens.json'
import {Colors} from 'src/types/theme'

const colors = {
  standard: importDesignTokens<{Colors: Colors}>(ColorsStandard),
  alternate: importDesignTokens<{Colors: Colors}>(ColorsAlternate)
}

export default (variant: 'standard' | 'alternate') : Colors => {
  return colors[variant].Colors
}
