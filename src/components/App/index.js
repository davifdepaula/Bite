import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect} from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutPage from "../pages/about";
import './App.css'
import Menu from "../pages/menu";
import Hamburguer from "../pages/hamburger";
import Pizzas from "../pages/pizzas";
import Dessert from "../pages/dessert";
import Contact from "../pages/contact";
import Drink from "../pages/drink"
import Details from "../details";
import Cart from "../cart";

import CartContext from "../../context/context";

function App() {
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    item.quantity += 1
    setCart([...cart, item]);
  };

  function handlePrice(){
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };

  function handleRemove(id){
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  function handleChange(item, quantity){
    if (quantity < 0){
      if (item.quantity > 0){
        item.quantity--        
      }
    }
    if (quantity > 0) {
      item.quantity += quantity
    }
    setCart([...cart])
    


  
  };





  return (
    <CartContext.Provider value = { {cart, setCart, price, setPrice,  handleChange, handleRemove, handleClick, handlePrice} }>
      <div className="App">
        <BrowserRouter>
          <Navbar size = {cart.length}/>   
            <Routes>
              <Route path ="/" element ={<Menu />}/>
              <Route path ="/pizzas" element ={<Pizzas/>}/>
              <Route path ="/hamburguer" element ={<Hamburguer/>}/>
              <Route path ="/bebidas" element ={<Drink />}/>
              <Route path ="/sobremesas" element ={<Dessert/>}/>
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/menu/:menuId" element = {<Details />} />
              <Route path ="/cart" element={<Cart />} />
            </Routes> 
        </BrowserRouter>
        </div> 
    </CartContext.Provider>
  
  );
}

export default App;

//setShow={setShow} size={cart.length}