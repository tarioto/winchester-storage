import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import App from '.'
import theme from '../../theme'

test('renders the Winchester storage heading', () => {
  render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>,
  )
  expect(
    screen.getByText(/Winchester RV, boat and Classics Storage/i),
  ).toBeInTheDocument()
})
