import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/bite.png"
import { SidebarData } from './SidebarData'


import './navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

return (
    <div>
        <div className='navbar'>
            <Link to='#' className='menuBars'>
                <div onClick={showSidebar} > 
                    <ion-icon name="menu-outline"></ion-icon>  
                </div>
            </Link>
            <div className='navSearch'>
                <input placeholder=' Pesquisa ...' />
            </div>
            
            <Link to="/menu">
                <div className='logo'>
                    <img src ={logo} alt="logo" />
                </div> 
            </Link>
        </div>
        <nav className={sidebar ? 'navbarMenu active' : 'navbarMenu'}>
            <ul className='navbarMenuItems' onClick={showSidebar}>
            <li className='navbarToggle'>
                <Link to='#' className='menuBars'>
                    <ion-icon name="menu-outline"></ion-icon>                
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                <li key={index} className={item.className}>
                    <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
                </li>
                );
            })}
            </ul>
        </nav>
    </div >
)
}

export default Navbar