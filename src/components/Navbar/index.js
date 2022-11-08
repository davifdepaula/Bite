import React from 'react'
import logo from "../assets/bite.png"
import './navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='logo'>
            <img src ={logo} alt="logo" />
        </div> 

        <div className='navSearch'>
            <input placeholder=' Pesquisa ...' />
        </div> 

        <div className='menu'>
            <div className='category'>
                Home
            </div>

            <div className='category'>
                Pratos
            </div >

            <div className='category'>
                Pizzas
            </div>

            <div className='category'>
                Hamburguer
            </div>

            <div className='category'>
                Sobremesas
            </div>

            <div className='category'>
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div> 
    </div>
  )
}

export default Navbar