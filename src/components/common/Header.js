import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { COUNTRY_LIST, IntlContext } from '../../lang/IntlWrapper'
import { Select } from 'antd'

const MyHeader = () => {
  const context = useContext(IntlContext)
  return (
    <header className=" z-1 w-full">
      <div className="flex w-full">
        <div className="p-4">logo</div>
        <nav className="bg-blue w-full p-4">
          <ul className="flex justify-around">
            {NAV_LIST.map((data) => (
              <li key={data.label}>
                <Link to={data.path}>
                  <FormattedMessage
                    id={`nav_${data.label}`}
                    defaultMessage={data.label}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Select
          options={COUNTRY_LIST.map((country) => ({
            label: country.label,
            value: country.value,
          }))}
          defaultValue={context.locale}
          onChange={context.selectLanguage}
        />
      </div>
    </header>
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
    path: '/signin',
    label: 'signin',
  },
  {
    path: '/test',
    label: 'test',
  },
]
