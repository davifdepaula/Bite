import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutPage from "../pages/about";
import './App.css'
import Menu from "../pages/menu";
import Hamburguer from "../pages/hamburger";
import Pizzas from "../pages/pizzas";
import Dessert from "../pages/dessert";
import Contact from "../pages/contact";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />   
        <Routes>
          <Route path ="/" element ={<Menu />}/>
          <Route path ="/pizzas" element ={<Pizzas/>}/>
          <Route path ="/hamburguer" element ={<Hamburguer/>}/>
          <Route path ="/sobremesas" element ={<Dessert/>}/>
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      <Footer /> 
    </BrowserRouter>
    </div>   
  );
}

export default App;
