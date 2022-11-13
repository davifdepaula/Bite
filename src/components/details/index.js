import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CartContext from '../../context/context';
import hungry from "../assets/neko-table.gif"

import "./details.css"

function Details() {
    const {menuId} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const {handleClick} = useContext(CartContext)

  useEffect(() => {
    fetchData()
  }, [])

function fetchData(){
  const url =  process.env.REACT_APP_BASE_URL
    axios.get(`${url}/${menuId}`)
    .then((response) => setProduct(response.data))
    .catch((error) => ("deu ruim aqui", error))
}

function showProduct(product){
  return (
  <div className='itemDetails' key={product.id} >
    <div className='cardBordImg'>
      <img src = {product.image} />
    </div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>{(product.price.toFixed(2))} R$</p>
    <button className='clickButton' onClick={() => handleClick(product)}>Adicionar ao carrinho</button>
    <button className='clickButton' onClick={() => navigate(`/`)}>Voltar</button>
  </div>
)
}

  return (
    <div className='cardDetails'>
      { product ? 
            <div>
              {showProduct(product)}
            </div>
          :
          <div className='loading'>
            <img src={hungry} alt="loading..."/>
            <p>Carregando menu ....</p>
          </div>

      }
    </div>
  )

}
export default Details