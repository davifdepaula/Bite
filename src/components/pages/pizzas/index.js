import React from 'react'
import SearchItems from '../../searchItems'


function Pizzas(props) {
  return (
      <div className='category'>   
        <h1>Pizzas</h1>
        <SearchItems
          category = "pizzas"
          />
      </div>
)
}
export default Pizzas