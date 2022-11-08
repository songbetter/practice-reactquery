import { Button, Layout } from 'antd'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import MyModal from '../components/common/Modal'

const MainPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
      <FormattedMessage
        id="user_hello"
        defaultMessage="Tommy, hello!"
        values={{ user: 'Tommy' }}
      />
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        모달 오픈
      </Button>
      <MyModal
        onOk={() => {
          setOpen(false)
        }}
        open={open}
        onCancel={() => {
          setOpen(false)
        }}
      >
        내가바로 메인이다
      </MyModal>
    </Layout>
  )
}

export default MainPage
