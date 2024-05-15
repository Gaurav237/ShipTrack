import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} /> 
        </Routes>
      </div>
    </div>
  )
}

export default App
