import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import Expenses from './pages/Expenses.jsx'
import Error from './pages/Error.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const router= createBrowserRouter([{
  path:'/',
  element: <App />,
  errorElement:<Error />,
  children:[
    {
      index:true,
      element:<Home />
    },
    {
      path:'/profile/:username',
      element:<Profile />
    },
    {
      path:'/profile/:username/:expensesId',
      element:<Expenses />
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/signup',
      element:<SignUp />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
