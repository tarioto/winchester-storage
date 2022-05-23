import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors: {
    blue: {
      '50': '#EEF2F6',
      '100': '#D0D9E7',
      '200': '#B1C1D8',
      '300': '#93A9C8',
      '400': '#7491B9',
      '500': '#5679A9',
      '600': '#456087',
      '700': '#334866',
      '800': '#223044',
      '900': '#111822',
    },
  },
})

export default theme
