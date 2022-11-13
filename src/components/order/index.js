import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/context'
import "./order.css"



function Order() {
  const {address, cart, price, setShow} = useContext(CartContext)
  const navigate = useNavigate()

  function showCart(){
    console.log(address)
    return (
      <div>
        {cart.map((item) => (
        <div className="cartBox" key={item.id}>
          <div className="cartImg">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div className='cartButton'>    
            <span>Quant: {(item.quantity)}</span>
          </div>
          <div className='cartRemoveButton'>
            <span>preço: {(item.price).toFixed(2)} R$</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Valor total no seu carrinho</span>
        <span>{price.toFixed(2)} R$</span>
      </div>
    </div>
    )}

  function showAdress(){
    return (
      <div className='address'>
        <span>Rua: {address.address},</span> <span>N°: {address.addressNumber},</span>
        <span>Bairro: {address.neighborhood}</span>, <span>Cep: {address.cep}</span>  
      </div>
    )
  }

  function finishOrder() {
    alert("Pedido feito com sucesso")
    navigate("/")
    window.location.reload(false)
  }

  function comeBack(){
    navigate("/")
    setShow(true)
  }


  return (
    <div>
      <div className='orderTitle'>Confirme seu pedido:</div>
      {showCart()}
      {showAdress()}
      <div className='orderBtn'>
        <button onClick={() => finishOrder()}>Finalizar</button>
        <button onClick={()=> comeBack()}>Voltar</button>
      </div>
    </div>

  )
}

export default Order