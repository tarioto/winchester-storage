import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Anchored on "Bdazzled Blue" #31548E (blue.600)
        blue: {
          50: { value: '#EAEEF4' },
          100: { value: '#D6DDE8' },
          200: { value: '#B5C1D6' },
          300: { value: '#90A3C2' },
          400: { value: '#6B84AE' },
          500: { value: '#466599' },
          600: { value: '#31548E' },
          700: { value: '#284574' },
          800: { value: '#1E3458' },
          900: { value: '#15233C' },
        },
        // Anchored on "Mountain Mist" #929194 (gray.500)
        gray: {
          50: { value: '#F8F8F9' },
          100: { value: '#F0F0F1' },
          200: { value: '#E1E0E1' },
          300: { value: '#CDCCCE' },
          400: { value: '#AEAEB0' },
          500: { value: '#929194' },
          600: { value: '#787779' },
          700: { value: '#5D5D5F' },
          800: { value: '#424143' },
          900: { value: '#292829' },
          950: { value: '#1A1A1B' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)

export default system
