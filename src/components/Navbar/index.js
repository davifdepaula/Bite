import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/bite.png"
import { SidebarData } from './SidebarData'


import './navbar.css'
import axios from 'axios'
import CartContext from '../../context/context'

function Navbar(props) {
    const [sidebar, setSidebar] = useState(false);
    const [show, setShow] = useState(true);
    const [looking, setLooking] = useState("")
    let change = false
    const{ size } = props
    const {menuItems} = useContext(CartContext)
    const navigate = useNavigate()

    const searchPlate = (e) => {
        console.log(menuItems)
        menuItems.map((item) => { 
            if(item.title.toLowerCase() === e){
                change = true
                navigate(`/menu/${item.id}`)
            }
            }
        )
        if(!change){
            (alert("Não existe esse item no cardapio"))
            change = false            
        }
        setLooking("")
    }

    const clickGlass = (element) => {
        searchPlate(looking.toLowerCase())
    }

    


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
                    <input placeholder=' Pesquisa ...' value ={looking} onChange={(event) => setLooking(event.target.value)} />
                    <button onClick={() => clickGlass(looking)}><ion-icon name="search-circle-outline"></ion-icon></button>
                </div>
                
                <div className='shoppingCart' onClick={() => setShow(false)}>
                    <ion-icon className="shoppingCartImg" name="cart-outline" onClick={() => navigate("/cart")}></ion-icon>
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