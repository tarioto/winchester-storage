import { Box, type BoxProps } from '@chakra-ui/react'
import LiquidGlass from 'liquid-glass-react'
import {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

type LiquidGlassProps = ComponentProps<typeof LiquidGlass>

interface GlassProps
  extends Pick<
      LiquidGlassProps,
      | 'displacementScale'
      | 'blurAmount'
      | 'saturation'
      | 'aberrationIntensity'
      | 'mode'
    >,
    /** Size of the glass surface; any Chakra sizing, including responsive. */
    Pick<BoxProps, 'w' | 'h' | 'maxW' | 'aspectRatio'> {
  cornerRadius?: number
  children: ReactNode
  /** Styles for the content layer inside the glass, e.g. a tint or padding. */
  contentProps?: BoxProps
}

// The library only re-measures its highlight layers on window resize, so a
// Glass that changes size (e.g. a responsive map) has to nudge it. Every
// instance listens to the same event, so batch the nudges into one per frame.
let nudgeFrame = 0
function requestLibraryRemeasure() {
  if (nudgeFrame) return
  nudgeFrame = requestAnimationFrame(() => {
    nudgeFrame = 0
    window.dispatchEvent(new Event('resize'))
  })
}

// liquid-glass-react renders several sibling layers that are each centered
// with top/left 50% + translate(-50%, -50%), so it needs a sized, relatively
// positioned slot to sit in rather than flowing inline. The slot is sized by
// CSS and measured, and the glass content is given that exact pixel size.
export function Glass({
  w,
  h,
  maxW,
  aspectRatio,
  cornerRadius = 999,
  children,
  contentProps,
  ...glassProps
}: GlassProps) {
  const slot = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const el = slot.current
    if (!el) return
    const measure = () =>
      setSize({ width: el.offsetWidth, height: el.offsetHeight })
    measure()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (size.width) requestLibraryRemeasure()
  }, [size])

  return (
    <Box
      ref={slot}
      position="relative"
      w={w}
      h={h}
      maxW={maxW}
      aspectRatio={aspectRatio}
    >
      <LiquidGlass
        {...glassProps}
        // The library defaults to 0.15; its cursor-following stretch felt
        // choppy on hover, so keep the glass still.
        elasticity={0}
        cornerRadius={cornerRadius}
        padding="0"
        // display: flex stops the library's inline-flex surface from sitting
        // on a text line, whose descender space made the rim layers taller.
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          display: 'flex',
        }}
      >
        <Box
          w={`${size.width}px`}
          h={`${size.height}px`}
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
