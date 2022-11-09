import axios from 'axios'
import React, { useState, useEffect } from 'react'
import hungry from "../assets/neko-table.gif"
import "./items.css"

function SearchItems(props) {
    const {category} = props
    const [menuItems, setMenuItems] = useState(null)
    useEffect(() => {
    const url = "http://localhost:1234/menu"
    console.log(url)
    axios.get(`${url}`)
        .then((response) => setMenuItems(response.data))
        .catch((error) => console.log("oi deu ruim error =>", error))
    }, [])
    function showItems(plate){
        return (<div className='menuItem' key={plate.id}>
                <img src = {plate.image} />
                <h2>{plate.title}</h2>
                <p>{(plate.price.toFixed(2))} R$</p>
                <p>detalhes</p>
        </div>)
    }
    return (
    <div className='menu'>   
        <div className='menuItems'>   
        {
        menuItems ?
        menuItems.map((plate, index) => {
            if(plate.category === category) {
                return (
                    showItems(plate)
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

export default SearchItems