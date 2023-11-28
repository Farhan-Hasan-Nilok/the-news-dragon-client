import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, Navigate, RouterProvider
} from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Career from './pages/Career'
import Login from './pages/Login'
import Register from './pages/Register'
import UserAuth from './AuthContext/UserAuth'
import PrivateRoute from './Shared/PrivateRoute'
import Category from './pages/Category'
import SingleNews from './Shared/SingleNews'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({params}) => fetch(`http://localhost:3000/category/${params.id}`),
      },
    ]
  },

  {
    path: 'other',
    element: <SingleNews />,
    children: [
      {
        path: '/other/about',
        element: <PrivateRoute><About /></PrivateRoute>
      },
      {
        path: '/other/career',
        element: <PrivateRoute><Career /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={router} />
    </UserAuth>
  </React.StrictMode>,
)
