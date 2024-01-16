import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routes } from './routes'
import { ThemeProvider } from './theme/theme-provider'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
