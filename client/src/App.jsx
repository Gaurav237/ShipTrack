import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <Header />
        <Dashboard>

        </Dashboard>
      </div>
    </div>
  )
}

export default App
