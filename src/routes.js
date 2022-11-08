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
    path: 'voucher',
    element: lazyLoadRoutes('VoucherPage'),
    errorElement: <NotFoundPage />,
  },
]

export default routes
