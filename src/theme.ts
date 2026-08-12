import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: '#EEF2F6' },
          100: { value: '#D0D9E7' },
          200: { value: '#B1C1D8' },
          300: { value: '#93A9C8' },
          400: { value: '#7491B9' },
          500: { value: '#5679A9' },
          600: { value: '#456087' },
          700: { value: '#334866' },
          800: { value: '#223044' },
          900: { value: '#111822' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

export default system
