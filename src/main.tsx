import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersProvider } from './contexts/filters.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
