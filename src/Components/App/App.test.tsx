import { expect, test } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Provider } from '../ui/provider'
import App from '.'

test('renders the Winchester storage heading', () => {
  render(
    <Provider>
      <App />
    </Provider>,
  )
  expect(
    screen.getByText(/Winchester RV, boat and Classics Storage/i),
  ).toBeInTheDocument()
})
