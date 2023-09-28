
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
    <div className='outlet'>
    <Outlet  />

    </div>
    </>
  )
}

export default App
