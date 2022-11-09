import SearchItems from '../../searchItems'
import Pizzas from "../pizzas"
import Hamburguer from "../hamburger"
import Drink from "../drink"
import Dessert from "../dessert"
import "./menu.css"


function Menu() {
  return (
    <div className='menu'>   
        <h1>Conheça nosso Menu</h1>

        <div className="item">
          <Pizzas />
        </div>

        <div className="item">
          <Hamburguer />
        </div>

        <div className="item">
          <Drink />
        </div>

        <div className="item">
          <Dessert />
        </div>
        

    </div>
  )
}

export default Menu