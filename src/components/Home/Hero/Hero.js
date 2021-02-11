import React from 'react'
//import './Hero.css'
import { Link } from 'react-router-dom'
 

const Hero = () => {
    return (


        
        <section id="main-slider" class="no-margin">
        <div class="carousel slide wet-asphalt">
           
            <div class="carousel-inner">
                <div class="item active" >
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="carousel-content centered">
                                    <h2 class="boxed animation animated-item-11 mt-5"> 
                                       Lorem ipsum dolor sit amet
                                    </h2>
                                    <p class="animation animated-item-2">   </p>
                                    <div className='hero-text'>

                                    <Link to='/appointment'>
                                        <button className='hero-btn'>Turnos</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        

                </div>
                
            </div>
        </div>
        
    </section>





    )
}

export default Hero
