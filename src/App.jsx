import NavBar from './component/nav_bar'
import { Outlet, useNavigate } from 'react-router-dom'
import './style/App.css'
import { useState } from 'react'

function App() {
  const [item,setItem] = useState([]);
  const navigate = useNavigate();
  const onClickCart=()=>{
    navigate('purchase/')
  }
  return (
    <>
      <NavBar/>
      <Outlet context={[item,setItem]}/>
      <button className='cart' onClick={onClickCart}>
        <div className='item-quantity'>{item.length}</div>
      </button>
    </>
  )
}

export default App
