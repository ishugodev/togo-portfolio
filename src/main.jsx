import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global.js'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </StrictMode>,
)
