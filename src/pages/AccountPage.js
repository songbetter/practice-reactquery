import { Layout } from 'antd'
import { useCurrentUser } from '../hooks/useCurrentUser'

const AccountPage = () => {
  const { data } = useCurrentUser()

  return (
    <Layout>
      <div>이름: {data.name}</div>
      <div>전화번호: {data.mobile} </div>
      <div>이메일: {data.email} </div>
    </Layout>
  )
}

export default AccountPage
