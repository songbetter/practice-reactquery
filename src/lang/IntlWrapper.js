import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'

import English from './en.json'
import Korean from './ko.json'
import Japaness from './jp.json'

export const IntlContext = React.createContext()
const local = navigator.language.split('-')[0] // 국가코드 ko-KR

const resoure = {
  en: English,
  ko: Korean,
  jp: Japaness,
}

const IntlWrapper = ({ children }) => {
  const [locale, setLocale] = useState(local)
  const [messages, setMessages] = useState(resoure[local])

  function selectLanguage(value) {
    setLocale(value)
    setMessages(resoure[value])
  }

  return (
    <IntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  )
}

export default IntlWrapper
