import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/home-page.jsx'
import './style/index.css'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router-dom'
import ErrorPage from './component/error-page.jsx'
import PlaceHolder from './component/placeHolder.jsx'
import Purchase from './component/purchase-page.jsx'

const route = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Navigate to = "catalogue" replace/>
      },
      {
        path:'home/',
        element:<Home/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'catalogue/',
        element:<PlaceHolder/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'support/',
        element:<PlaceHolder/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'about/',
        element:<PlaceHolder/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'purchase/',
        element: <Purchase/>,
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
