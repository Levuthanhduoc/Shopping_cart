import home from '../assets/home.svg'
import '../style/nav_bar.css'
import {Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <>
            <nav className='top-bar'>
                <div className="nav-left">
                    <Link to={'home/'}>
                        <img className='icon' src={home} alt="icon"/>
                        Home
                    </Link>
                </div>
                <div className='nav-right'>
                    <Link to={'catalogue/'}>Catalogue</Link>
                    <Link to={'support/'}>Support</Link>
                    <Link to ={'about/'}>About</Link>
                </div>
            </nav>
        </>
    )
}