import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Contacto.css'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'  



 

const Contact = (props) => {

    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        asunto: '',
        mensaje: '' 
      });
    

        // const [nombre, setNombre] = useState('eli@test.com')
        // const [email, setEmail] = useState('eli@test.com')
        // const [asunto, setAsunto] = useState('123')
        // const [mensaje, setMensaje] = useState('123')
     
        function handleInputChange(e) {
            setUsuario({
              ...usuario,
              [e.target.name]: e.target.value
            });
          }
        
        
          
          async function handleSubmit(e) {
            //e.preventDefault();
            try {
              await axios.post('http://localhost:4000/email', usuario);
            } catch (error) {
              //mostrarError(error.response.data);
              console.log(error);
            }
           // e.history.push({ pathname: '/appointment' });

          }
           
            
 
     
 

    return ( 


       <>
                   <Navbar/>

<div class="page-contact u-s-p-t-80">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="touch-wrapper">
                        <h1 class="contact-h1">Ponete en contacto con nosotros</h1>
                        <form onSubmit={handleSubmit}>
                            <div class="group-inline u-s-m-b-30">
                                <div class="group-1 u-s-p-r-16">
                                    <label for="contact-name">Nombre
                                        <span class="astk">*</span>
                                    </label>
                                    <input 
                                      type="text" 
                                      name="name" 
                                      onChange={handleInputChange}
                                   //   onChange={(e) => setNombre(e.target.value)}
                                      value={usuario.name}
                                      id="contact-name" 
                                      class="text-field" 
                                      placeholder=""/>
                                </div>
                                <div class="group-2">
                                    <label for="contact-email">Email
                                        <span class="astk">*</span>
                                    </label>
                                    <input 
                                       type="text"
                                       name="email" 
                                      onChange={handleInputChange}
                                    // onChange={(e) => setEmail(e.target.value)}
                                       value={usuario.email}
                                       id="contact-email" 
                                       class="text-field" 
                                        placeholder=""/>
                                </div>
                            </div>
                            <div class="u-s-m-b-30">
                                <label for="contact-subject">Asunto
                                    <span class="astk">*</span>
                                </label>
                                <input 
                                    type="text"
                                    name="asunto" 
                                    onChange={handleInputChange}
                                // onChange={(e) => setAsunto(e.target.value)}
                                    value={usuario.asunto}
                                    id="contact-subject" 
                                    class="text-field" 
                                    placeholder=""/>
                            </div>
                            <div class="u-s-m-b-30">
                                <label for="contact-message">Mensaje:</label>
                                <textarea 
                                   class="text-area" 
                                   name="mensaje"
                                   value={usuario.mensaje}
                            // onChange={(e) => setMensaje(e.target.value)}
                                   onChange={handleInputChange}
                                   id="contact-message"></textarea>
                            </div>
                            <div class="u-s-m-b-30 mt-5">
                            <button type="submit" 
                                class="btn btn-danger  button-outline-secondary">
                                Enviar mensaje
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="information-about-wrapper">
                        <h1 class="contact-h1">Información sobre nosotros</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora, voluptate. Architecto aspernatur, culpa cupiditate deserunt dolore eos facere in, incidunt omnis quae quam quos, similique sunt tempore vel vero.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tempora, voluptate. Architecto aspernatur, culpa cupiditate deserunt dolore eos facere in, incidunt omnis quae quam quos, similique sunt tempore vel vero.
                        </p>
                    </div>
                    <div class="contact-us-wrapper">
                        <h1 class="contact-h1">Contactactanos</h1>
                        <div class="contact-material u-s-m-b-16">
                            <h6>Dirección</h6>
                            <span>4441 Jett Lane</span>
                            <span>General Rodriguez, CA 90706</span>
                        </div>
                        <div class="contact-material u-s-m-b-16">
                            <h6>Email</h6>
                            <span>cerveceriagrossi@gmail.com</span>
                        </div>
                        <div class="contact-material u-s-m-b-16">
                            <h6>Teléfonos</h6>
                            <span>+111-444-989</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="u-s-p-t-80">
            <div id="map"></div>
        </div>
    </div>
     <Footer/>   

       </>

    )
}

export default Contact
