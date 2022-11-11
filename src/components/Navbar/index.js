import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/bite.png"
import { SidebarData } from './SidebarData'


import './navbar.css'

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);
    const [show, setShow] = useState(true);
    const{ size } = props
    const navigate = useNavigate()

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
                            <img src ={logo} alt="logo" onClick={() => setShow(true)} />
                        </div> 
                    </Link>

                </div>
                <div className='navSearch'>
                    <input placeholder=' Pesquisa ...' />
                    <button><ion-icon name="search-circle-outline"></ion-icon></button>
                </div>
                
                <div className='shoppingCart' onClick={() => setShow(false)}>
                    <ion-icon name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
                    {show ? <span>{size}</span> : null}
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
                            <div className='logo' onClick={() => setShow(true)}>
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