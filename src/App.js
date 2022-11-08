import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import IntlWrapper from './lang/IntlWrapper'

import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
})

function App() {
  return (
    <IntlWrapper>
      <QueryClientProvider client={queryClient}></QueryClientProvider>
    </IntlWrapper>
  )
}

export default App
