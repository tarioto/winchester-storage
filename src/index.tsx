import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './Components/App'
import theme from './theme'

const container = document.getElementById('app')!
const root = createRoot(container)
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
