import { Layout } from 'antd'
import { FormattedMessage } from 'react-intl'

const MainPage = () => {
  return (
    <Layout>
      <FormattedMessage
        id="user_hello"
        defaultMessage="Tommy, hello!"
        values={{ user: 'Tommy' }}
      />
    </Layout>
  )
}

export default MainPage
