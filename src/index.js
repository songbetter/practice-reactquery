import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import MyModal from './components/common/Modal'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const portal = ReactDOM.createRoot(document.getElementById('portal'))
portal.render(<MyModal />)
