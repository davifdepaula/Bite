import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hungry from "../assets/neko-table.gif"
import "./items.css"
import CartContext from '../../context/context'

function SearchItems(props) {
    const {category} = props
    const { handleClick, fetchData } = useContext(CartContext)
    const {menuItems, setMenuItems} = useContext(CartContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchData()
    }, [])

    function showItems(plate){
        return (
        <div className='menuItem' key={plate.id} >
                <img src = {plate.image} />
                <h2>{plate.title}</h2>
                <p>{(plate.price.toFixed(2))} R$</p>
                <button className='clickButton' onClick={() => handleClick(plate)}>Adicionar ao carrinho</button>
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