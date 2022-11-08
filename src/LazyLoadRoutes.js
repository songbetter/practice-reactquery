import { lazy, Suspense } from 'react'

import PageTemplate from './components/common/PageTemplate'

export function lazyLoadRoutes(componentName) {
  const LazyElement = lazy(() => import(`./pages/${componentName}.js`))

  return (
    <PageTemplate>
      <Suspense fallback="Loading...">
        <LazyElement />
      </Suspense>
    </PageTemplate>
  )
}
