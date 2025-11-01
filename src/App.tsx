import { HelmetProvider } from 'react-helmet-async'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 relative">
        {/* Modern background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30"></div>
        
        {/* Main content */}
        <div className="relative">
          <MainLayout />
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App
