import React from 'react'
import SearchItems from '../../searchItems'


function Drink() {
  return (<div className='category'>   
    <h1>Bebidas</h1>
    <SearchItems
      category = "drink"
      />
  </div>
)
}

export default Drink