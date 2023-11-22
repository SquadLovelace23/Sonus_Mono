import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../src/css/main.css"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { DarkModeProvider } from './context/DarkMode.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </AuthProvider>
  </BrowserRouter>
)
