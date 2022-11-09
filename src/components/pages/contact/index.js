import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className='contact'>
        <p>
            Para mais informações entre em contato pelo telefone, whatsapp ou qualquer midia social catalogada abaixo.
        </p>
            <ul className='socialMedias'>
                <li>
                    <a href='#'className='click'>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href='https://www.linkedin.com/in/davifdepaula' className='click'> 
                        <ion-icon name="logo-linkedin"></ion-icon>
                     </a>
                </li>

                <li>
                    <a href='https://github.com/davifdepaula' className='click'> 
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href='https://www.instagram.com/davi.fpaula' className='click'> 
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>  
                </li>
            </ul>
    </div>
  )
}

export default Contact