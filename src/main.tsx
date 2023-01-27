import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import eruda from 'eruda'

import App from './App'
import { defaultTheme } from './assets/themes/default'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)

if (import.meta.env.DEV) {
  eruda.init()
}
