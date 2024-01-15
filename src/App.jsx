import { useState } from 'react'
import NavBar from './component/nav_bar'
import { Outlet } from 'react-router-dom'
import './style/App.css'

function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default App
