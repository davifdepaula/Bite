import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import hungry from "../assets/neko-table.gif"

import "./details.css"

function Details() {
    const {menuId} = useParams()
    const [product, setProduct] = useState(null)

  useEffect(() => {
    const url =  "http://localhost:1234/menu"
    axios.get(`${url}/${menuId}`)
    .then((response) => setProduct(response.data))
    .catch((error) => ("deu ruim aqui", error))
  }, [])
  return (
    <div className='details'>
      { product ? 
            <div>
              <img src={product.image} alt="foto" />
              <h2>{product.title}</h2>
              <p className='description'>{product.description}</p>
              <p>{(product.price.toFixed(2))} R$</p>
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