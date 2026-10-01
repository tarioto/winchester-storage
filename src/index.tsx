import { createRoot } from 'react-dom/client'
import App from './Components/App'
import { Provider } from './Components/ui/provider'

const container = document.getElementById('app')
if (!container) throw new Error('Missing #app root element')
const root = createRoot(container)
root.render(
  <Provider>
    <App />
  </Provider>,
)
