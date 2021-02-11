import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'
import Hours from './Hours/Hours'
import Footer from './Footer/Footer'   

//import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <Hours/>  
            <Footer/>    
        </div>
    )
}

export default Home
