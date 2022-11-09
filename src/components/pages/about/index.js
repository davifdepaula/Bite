import React from 'react'
import hungry from "../../assets/hungry.gif"
import './aboutPage.css'

function AboutPage() {
  return (
    <div className='about'>
      <img src={hungry} alt="gif"/>
      <p>
        Nosso estabelecimento busca manter um clima de “jantar em família”, 
        oferecendo serviços de mesa e pratos com preços moderados.  
        Nossa principal característica é misturar pratos clássicos com molhos gourmets e outras iguarias.
      </p>
    
    </div>
  )
}

export default AboutPage