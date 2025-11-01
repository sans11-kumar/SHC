import { HelmetProvider } from 'react-helmet-async'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <MainLayout />
      </div>
    </HelmetProvider>
  )
}

export default App
