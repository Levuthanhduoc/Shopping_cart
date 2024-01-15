import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/home-page.jsx'
import './style/index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './component/error-page.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'home/',
        element:<Home/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'catalogue/',
        element:<ErrorPage/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'support/',
        element:<ErrorPage/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'about/',
        element:<ErrorPage/>,
        errorElement:<ErrorPage/>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
