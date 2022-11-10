import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import IntlWrapper from './lang/IntlWrapper'

import routes from './routes'

import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
})

const router = createBrowserRouter(routes)

function App() {
  return (
    <RecoilRoot>
      <IntlWrapper>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </IntlWrapper>
    </RecoilRoot>
  )
}

export default App
