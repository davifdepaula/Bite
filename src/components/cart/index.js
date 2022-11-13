import React from 'react'
import {useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/context';

import { BsCartX } from "react-icons/bs"



import './cart.css'

function Cart() {
  const {cart, setCart, price, handleChange, handleRemove, handlePrice} = useContext(CartContext)
  const navigate = useNavigate()

  useEffect(() => {
    handlePrice()
  })

  function updateScreen(item){
    if (item.quantity > 1){
      handleChange(item, -1)
    }
    else {
      handleRemove(item.id)
    }
  }

  function showCart(){
    return (
      <div>
        {cart.map((item) => (
        <div className="cartBox" key={item.id}>
          <div className="cartImg">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div className='cartButton'>
            <span className='plusButton' onClick={() => handleChange(item, 1)}><ion-icon name="add-circle-outline"></ion-icon></span>
            <span>{(item.quantity)}</span>
            <span className='minusButton' onClick={() => updateScreen(item)}><ion-icon name="remove-circle-outline"></ion-icon></span>
          </div>
          <div className='cartRemoveButton'>
            <span>{(item.price).toFixed(2)} R$</span>
            <span className='trashButton' onClick={() => handleRemove(item.id)}><ion-icon name="trash-outline"></ion-icon></span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Valor total no seu carrinho</span>
        <span>{price} R$</span>
      </div>
      <div className='makeOrder'></div>
          <button className='makeOrderBtn' onClick={() => navigate('/userInfo')}>Continuar</button>
      </div>
    )
  }

  return (
    <div>
      {cart.length ? showCart() :
      <div className='emptyCart'><BsCartX/> Não há itens no carrinho <BsCartX/></div>
      }
    </div>
  )
}

export default Cart