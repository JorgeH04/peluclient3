import React from 'react'
//import './Hero.css'
import { Link } from 'react-router-dom'
 

const Footer = () => {
    return (


        <>

      

    <footer id="footer" class="midnight-bluee">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                &copy; 2021 <a target="_blank" href="facebook.com" title="find my profile :P">MegaDev</a>. 

                </div>
                <div class="col-sm-6">
                    <ul class="pull-right">
                        <li><a href="#">   Calle Salud, 19, Madrid </a></li>
                        <li><a href="about-us.html"> España</a></li>
                        <li><a href="contact-us.html">Teléfono: +91 524 05 75 </a></li>
                        <li><a id="gototop" class="gototop" href="#"><i class="icon-chevron-up"></i></a></li> 
                    </ul>    
                </div>
            </div>
        </div>
    </footer> 


</>

    )
}

export default Footer
