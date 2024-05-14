import './App.css'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <h1> Header </h1>
        <h2> Body </h2>
      </div>
    </div>
  )
}

export default App
