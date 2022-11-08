import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { COUNTRY_LIST, IntlContext } from '../../lang/IntlWrapper'
import { Menu, Select } from 'antd'
import { Header } from 'antd/lib/layout/layout'

const MyHeader = () => {
  const context = useContext(IntlContext)
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['main']}
        items={NAV_LIST.map((data) => ({
          key: data.label,
          label: (
            <Link to={data.path}>
              <FormattedMessage
                id={`nav_${data.label}`}
                defaultMessage={data.label}
              />
            </Link>
          ),
        }))}
      />
      <Select
        options={COUNTRY_LIST.map((country) => ({
          label: country.label,
          value: country.value,
        }))}
        defaultValue={context.locale}
        onChange={context.selectLanguage}
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
