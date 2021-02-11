import React from 'react'
import beardShave from '../../../assets/beard_shave.jpg'
import hair_cut from '../../../assets/hair_cut.jpg'
import pic3 from '../../../assets/pic3.jpg'
import logo from '../../../assets/logo.png'
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";



import './Services.css'

const Services = () => {
    return (
        <div className='services' id='what-we-do'>

            <div className='services-container'>

                <div className='services-info'>
                    <h1>Servicios</h1>
                    <p className='mr-bottom services-para'> Combinamos lo mejor de la barbería tradicional con texturizados, volúmenes y tendencias modernas. La old schooles moda (ahora y siempre) y</p>
                    <p className='mr-bottom services-para'> vos también podés tener una imagen moderna y actual. Solo tienes que dar el paso.</p>
                </div>

                <div className='services-grid'>
                    <div className='services-box'>
                        <img src={pic3} alt=''></img>
                        <h2>Magna</h2>
                        <p className='mr-bottom services-para'>Mollit anim id est laborum.</p>
                        <p className='mr-bottom services-para'> labore et dolore magna aliqua.</p>
                    </div>
                    <div className='services-box'>
                        <img src={pic3} alt=''></img>
                        <h2>Mollit</h2>
                        <p className='mr-bottom services-para'>Deserunt mollit anim id est laborum.</p>
                        <p className='mr-bottom services-para'> ullamco laboris nisi ut aliquip ex ea commod..</p>
                    </div>
                  
                    <div className='services-box'>
                        <img src={pic3} alt=''></img>
                        <h2>Incididunt</h2>
                        <p className='mr-bottom services-para'>Ut enim ad minim veniam</p>
                        <p className='mr-bottom services-para'>empor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
