import React from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'

const MyHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['main']}
        items={NAV_LIST.map((data) => ({
          key: data.label,
          label: <Link to={data.path}>{data.label}</Link>,
        }))}
      />
    </Header>
  )
}

export default React.memo(MyHeader)

const NAV_LIST = [
  {
    path: '/account',
    label: 'account',
  },
  {
    path: '/',
    label: 'main',
  },
  {
    path: '/voucher',
    label: 'voucher',
  },
]
