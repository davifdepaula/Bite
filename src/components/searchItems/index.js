import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hungry from "../assets/neko-table.gif"
import "./items.css"

function SearchItems(props) {
    const {category} = props
    const [menuItems, setMenuItems] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    function fetchData(){
        const url = process.env.REACT_APP_BASE_URL
        axios.get(url)
            .then((response) => setMenuItems(response.data))
            .catch((error) => console.log("oi deu ruim error =>", error))
    }

    function showItems(plate){
        return (
        <div className='menuItem' key={plate.id} >
                <img src = {plate.image} />
                <h2>{plate.title}</h2>
                <p>{(plate.price.toFixed(2))} R$</p>
                <button className='clickButton'>Adicionar ao carrinho</button>
                <button className='clickButton' onClick={() => navigate(`/menu/${plate.id}`)}>detalhes</button>
        </div>
    )
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