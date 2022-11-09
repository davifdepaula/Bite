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
            <div  className='menuBars'>
                <Link to='#'>
                    <div onClick={showSidebar} > 
                        <ion-icon name="menu-outline"></ion-icon>  
                    </div>
                </Link>

                <Link to="/">
                    <div className='logo'>
                        <img src ={logo} alt="logo" />
                    </div> 
                </Link>

            </div>
            <div className='navSearch'>
                <input placeholder=' Pesquisa ...' />
                <button><ion-icon name="search-circle-outline"></ion-icon></button>
            </div>
            
            <div className='shoppingCart'>
                <ion-icon name="cart-outline"></ion-icon>
            </div>
            
        </div>
        <nav className={sidebar ? 'navbarMenu active' : 'navbarMenu'}>
            <ul className='navbarMenuItems' onClick={showSidebar}>
            <li className='navbarToggle'>
            <div className='menuBars'>
                <Link to='#'>
                        <div onClick={showSidebar} > 
                            <ion-icon name="menu-outline"></ion-icon>  
                        </div>
                    </Link>

                    <Link to="/menu">
                        <div className='logo'>
                            <img src ={logo} alt="logo" />
                        </div> 
                    </Link>
            </div>
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