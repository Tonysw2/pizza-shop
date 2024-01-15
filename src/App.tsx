import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Routes } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </HelmetProvider>
  )
}
