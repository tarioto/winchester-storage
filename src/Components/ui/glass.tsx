import { Box, type BoxProps } from '@chakra-ui/react'
import LiquidGlass from 'liquid-glass-react'
import type { ComponentProps, ReactNode } from 'react'

type LiquidGlassProps = ComponentProps<typeof LiquidGlass>

interface GlassProps
  extends Pick<
    LiquidGlassProps,
    | 'displacementScale'
    | 'blurAmount'
    | 'saturation'
    | 'aberrationIntensity'
    | 'mode'
  > {
  /** Pixel size of the glass surface; the library measures it once on mount. */
  width: number
  height: number
  cornerRadius?: number
  children: ReactNode
  /** Styles for the content layer inside the glass, e.g. a tint. */
  contentProps?: BoxProps
}

// liquid-glass-react renders several sibling layers that are each centered
// with top/left 50% + translate(-50%, -50%), so it needs a fixed-size,
// relatively positioned slot to sit in rather than flowing inline.
export function Glass({
  width,
  height,
  cornerRadius = 999,
  children,
  contentProps,
  ...glassProps
}: GlassProps) {
  return (
    <Box position="relative" w={`${width}px`} h={`${height}px`}>
      <LiquidGlass
        {...glassProps}
        // The library defaults to 0.15; its cursor-following stretch felt
        // choppy on hover, so keep the glass still.
        elasticity={0}
        cornerRadius={cornerRadius}
        padding="0"
        style={{ position: 'absolute', top: '50%', left: '50%' }}
      >
        <Box
          w={`${width}px`}
          h={`${height}px`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="body"
          {...contentProps}
        >
          {children}
        </Box>
      </LiquidGlass>
    </Box>
  )
}
