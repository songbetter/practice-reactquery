import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  return <div>{error.statusText || error.message}</div>
}

export default ErrorPage
