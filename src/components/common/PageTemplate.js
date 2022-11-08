import { Layout } from 'antd'
import { Footer } from 'antd/lib/layout/layout'

import MyHeader from '../common/Header'

const PageTemplate = ({ children }) => {
  return (
    <Layout>
      <MyHeader />
      <Layout style={{ marginTop: '120px' }}>{children}</Layout>
      <Footer />
    </Layout>
  )
}

export default PageTemplate
