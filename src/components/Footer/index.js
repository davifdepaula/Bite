import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className='rodape'>
          Feito com <ion-icon name="heart"></ion-icon> por Davi Ferreira de Paula
            <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/davifdepaula' className='click'> 
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href='https://github.com/davifdepaula' className='click'> 
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href='https://www.instagram.com/davi.fpaula' className='click'> 
              <ion-icon name="logo-instagram"></ion-icon>
            </a>              
        </div>
      </div>
    </footer>
  )
}

export default Footer