import { lazyLoadRoutes } from './LazyLoadRoutes'

const routes = [
  {
    path: '/',
    element: lazyLoadRoutes('MainPage'),
  },
  {
    path: 'account',
    element: lazyLoadRoutes('AccountPage'),
  },
  {
    path: 'voucher',
    element: lazyLoadRoutes('VoucherPage'),
  },
]

export default routes
