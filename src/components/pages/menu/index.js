import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Pizzas from '../pizzas'
import Hamburguer from "../hamburger"
import Bebidas from "../bebidas"
import Sobremesas from "../dessert"

import hungry from "../../assets/neko-table.gif"
import "./menu.css"


function Menu() {
  const [menuItems, setMenuItems] = useState(null)
  const category = ["pizzas", "hamburguer", "sobremesas", "bebidas"]
  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URI
    axios.get(`${url}/menu`)
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.log("oi deu ruim error", error))
  }, [])
  return (
    <div className='menu'>   
      <h1>Todos os pratos que servimos na casa</h1>
      <div className='menuItems'>   
      {
        menuItems ?
        menuItems.map((plate, index) => {
          if(plate.category === "pizzas"){
            return (<Pizzas />
            )
          }

          else if(plate.category === "hamburguer"){
            return (<Hamburguer />
            )
          }

          else if(plate.category === "dessert"){
            return (<Sobremesas />
            )
          }

          else if(plate.category === "bebidas"){
            return (<Bebidas />
            )
          }
        }):
          <div className='loading'>
            <img src={hungry} alt="loading..."/>
            <p>Carregando menu ....</p>
          </div>
      }
    </div>
    </div>
  )
}

export default Menu