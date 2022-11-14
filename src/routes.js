import { lazyLoadRoutes } from './LazyLoadRoutes'
import NotFoundPage from './pages/NotFoundPage'

const routes = [
  {
    path: '/',
    element: lazyLoadRoutes('MainPage'),
    errorElement: <NotFoundPage />,
  },
  {
    path: 'account',
    element: lazyLoadRoutes('AccountPage'),
    errorElement: <NotFoundPage />,
  },
  {
    path: 'signin',
    element: lazyLoadRoutes('SignInPage'),
    errorElement: <NotFoundPage />,
  },
  { path: 'test', element: lazyLoadRoutes('TestPage') },
]

export default routes
