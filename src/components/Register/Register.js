import React ,{useState, useEffect}from 'react'
import './Register.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import loadingIcon from '../../assets/loading_icon.gif'
import Navbar from '../Home/Navbar/Navbar'
import Footer from '../Home/Footer/Footer'  



const Register = (props) => {
    const [nombre, setNombre] = useState('eli@test.com')
    const [email, setEmail] = useState('eli@test.com')
    const [pass, setPass] = useState('123')
    const [confirmPass, setConfirmPass] = useState('123')
    const [error, setError] = useState('')

    useEffect( ()=>{
        console.log('register rendered')
    },[])
        
    const handleRegister = async () =>{
        let loading = document.querySelector('.register-loading')
        loading.style.display = 'block'

        let userData = {}
        userData.nombre = nombre
        userData.email = email
        userData.pass = pass
        userData.confirmPass = confirmPass
       
        
       //  let response =  await axios.post('https://backbarber.herokuapp.com/register', userData)
         let response =  await axios.post('http://localhost:4000/register', userData)
        let {error} = response.data
        if(error){
            loading.style.display = 'none'
            console.log(error)
            setError(error)
            setTimeout( ()=>{
                setError('')
            },6000)
        }
        else{
            props.history.push({ pathname: '/login' });
            console.log('register succed')
        }   
    }

    const registerByPress = (e) =>{
        if(e.key === 'Enter')
            handleRegister()
      }

    
    return (
        <>
        <div className='register'>
            <Navbar/>
            <div className='register-container '>
                <div className='register-form mt-5'>
                    <div className='register-info '>
                        <h1>Registrarse</h1>
                       
                    </div>
                    <div className='form-container'> 
                    {error !== '' ?  <ErrorMsg info={error}/>
                        
                        : ''}

                            <p>Nombre:</p>
                        <input type="email" 
                            placeholder=' '
                            className='form-container-input'
                            name='nombre'    
                            onChange={(e) => setNombre(e.target.value)}
                        />


                        <p>Email:</p>
                        <input type="email" 
                            placeholder=' '
                            className='form-container-input'
                            name='email'    
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Contraseña:</p>
                        <input type="password"
                            placeholder=' '
                            className='form-container-input'
                            name='password'
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <p>Confirmar Contraseña:</p>
                        <input type="password"
                            placeholder=' '
                            className='form-container-input'
                            name='confirmPassword'
                            onChange={(e) => setConfirmPass(e.target.value)}
                            onKeyPress={(e) => registerByPress(e)}
                        /> 
                        <div className='reg-btn-div'>
                            <button onClick={handleRegister} className='reg-submit'>Registrate</button>
                        </div>
                        <div className='new-account-login'>
                            <Link to='/login' className='new-account-link'>
                                Tenés una cuenta? <br/>Iniciá Sesión ahora!
                            </Link> 
                        </div> 
                        <div className='login-div'>
                            <img className='register-loading' src={loadingIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className='register-img'></div>
            </div>  

        </div>

</>
    )
}

export default Register
