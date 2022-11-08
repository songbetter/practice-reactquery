import { Modal } from 'antd'

const MyModal = ({ open, onOk, onCancel, children }) => {
  return (
    open && (
      <Modal title="Basic Modal" open={open} onOk={onOk} onCancel={onCancel}>
        {children}
      </Modal>
    )
  )
}

export default MyModal
