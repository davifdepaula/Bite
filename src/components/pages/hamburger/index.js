import React from 'react'
import SearchItems from '../../searchItems'

function Hamburguer() {
  return (<div className='category'>   
        <h1>Hamburgers</h1>
        <SearchItems
          category = "hamburguer"
          />
    </div>
)
}

export default Hamburguer