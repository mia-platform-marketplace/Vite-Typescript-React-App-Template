import theme from 'src/theme'
import {Theme} from 'src/types/theme'

export default function createBaseTheme ({
  compact: isCompact,
  alternate: isAlternate
}: {
  compact?: boolean,
  alternate?: boolean,
}): Theme {
  const compact = isCompact ? 'compact' : 'default'
  const alternate = isAlternate ? 'alternate' : 'standard'
  return {
    Colors: theme.Colors(alternate),
    Typography: theme.Typography(compact),
    Dimensions: theme.Dimensions(compact),
    Components: theme.Components({
      variant: alternate,
      colors: alternate,
      dimensions: compact,
      typography: compact
    })
  }
}
