import { Layout } from 'antd'
import { useState } from 'react'
import { useCurrentUser } from '../hooks/useCurrentUser'

const AccountPage = () => {
  const { data, mutation } = useCurrentUser()

  const [name, setName] = useState(data.name)
  const onChange = (e) => setName(e.target.value)

  return (
    <Layout>
      <div>이름: {data.name}</div>
      <div>전화번호: {data.mobile} </div>
      <div>이메일: {data.email} </div>
      <input value={name} onChange={onChange} />
      <button
        onClick={() =>
          mutation.mutate({
            name,
          })
        }
      >
        수정하기
      </button>
    </Layout>
  )
}

export default AccountPage
