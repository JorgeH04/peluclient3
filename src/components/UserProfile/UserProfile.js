import React, {useState, useEffect} from 'react'
import './UserProfile.css'
import Navbar from '../Home/Navbar/Navbar'
import profileImg  from '../../assets/profile-img.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {getCookie, setCookie, setCookieInMins, deleteCookie} from '../../cookies'


const UserProfile = (props) => {
    //const [nombre, setNombre] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [updatedName, setUpdatedName] = useState('')
    const [updatedEmail, setUpdatedEmail] = useState('')
    const [updatedPhone, setUpdatedPhone] = useState('')

    const [time, setTime] = useState('Vacío')
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')



    useEffect(() =>{
        getProfile(getCookie('id'))
        console.log('upload user profile')
    },[])

    
    const getProfile = (userID) =>{
       axios.get(`http://localhost:4000/profiledata?id=${userID}`).then((response) =>{
      //   axios.get(`https://backbarber.herokuapp.com/profiledata?id=${userID}`).then((response) =>{

            let {error, name, email,   phone } = response.data 
            if(error){
                console.log(error)
            }
            else{
                setName(name)
               // setNombre(nombre)
                setEmail(email)
                setPhone(phone)
                setCookie('phone', phone ,2)
                console.log(response.data)
            }
        })
      //  axios.get(`https://backbarber.herokuapp.com/userappointment?id=${userID}`).then((response) =>{
       axios.get(`http://localhost:4000/userappointment?id=${userID}`).then((response) =>{
            console.log(response.data)

            let {error, day, time, date, nombre } = response.data 
            if(error){
                console.log(error)
            }
            else{
                setTime(time)
                setDate(date)
                setDay(day)
            }
        })
    }

    const updateProfile = () =>{

        if(updatedName === '' && updatedEmail ==='' && updatedPhone ===''){ 
            alert('all fields are empty')
        }
        else{

            let obj = {}
            obj.name = updatedName
            obj.email = updatedEmail
            obj.phone = updatedPhone
            obj.userID = getCookie('id')

         //    axios.post('https://backbarber.herokuapp.com/updateprofile', obj).then((response) =>{
           axios.post('http://localhost:4000/updateprofile', obj).then((response) =>{
                let {error} = response.data

                if(error){
                    alert('update profile: '+error)
                }
                else{
                    
                     
                    if(email !=='')
                        setEmail(email)
                    if(phone !==''){
                        setPhone(phone)
                        setCookie('phone', phone ,2)
                    }
                    // if(name !==''){
                    //     setCookie('name', name ,2)
                    //     setName(name)
                    // }
                    alert('data successfully updated!')
                    window.location.reload(false);
                    console.log('server res: ', response.data)
                }
            })
        }
    }


    const changeAppointment = () =>{
        console.log('change appointment')

        if(time === 'Empty'){
            alert('You not have appointment')
        }else{
            setCookieInMins('change', true, 1)
            props.history.push({ pathname: '/appointment' });
        }
    }

    const cancelAppointment = async() => {

      //  let response = await axios.post('https://backbarber.herokuapp.com/cancelappointment', {id:getCookie('id')})
         let response = await axios.post('http://localhost:4000/cancelappointment', {id:getCookie('id')})
        console.log(response.data)
        let {error} = response.data
        if(error){
            alert(error)
        }
        else{
            alert('Su turno ha sido cancelado')
            window.location.replace('/profile')
        }
    }

    const deleteAcc = async() =>{
        console.log('id cookie ',getCookie('id'))
         let response = await axios.post('http://localhost:4000/deleteacc', {id:getCookie('id')})
      // let response = await axios.post('https://backbarber.herokuapp.com/deleteacc', {id:getCookie('id')})

        let {error} = response.data
        if(error){
            alert(error)
        }
        else{

            deleteCookie('id')
            deleteCookie('admin')
            deleteCookie('status')
            deleteCookie('name')

            alert(response.data)
            window.location.replace('/')
        }
    }

    return (

        <div>
<Navbar/>

<div class="bg-dark">

    <div class="sufee-login d-flex align-content-center flex-wrap">
        <div class="container">
            <div class="login-content">
                <div class="login-logo">
                    <a href="index.html">
                        <img class="align-content" src="images/logo.png" alt=""/>
                    </a>
                </div>
                <div class="login-form">
                    <form>
                        <div class="form-group">
                            <h2><u> Mi Cuenta</u></h2>
                        </div>
                         <div class="form-group">
                          <u> Nombre:</u> <span>{name}</span>
                        </div>
                        <div class="form-group">
                          <u>Email:</u>  <span>{email}</span>
                        </div>
                        <div class="form-group">
                         <u> Teléfono:</u>  <span>{phone}</span>
                        </div>
                        <div class="checkbox">
                            <label> 
                                    <u>
                                Tiene un turno para el día:
                                    </u>
                             </label>
                             <label class="pull-right">
                                <a>
                                   <p>{day}</p>
                                   <p>{time}</p>
                                   <p>{date}</p>
                                </a>
                             </label>
                        </div>
                                <button onClick={cancelAppointment} class="btn btn-success btn-flat m-b-30 m-t-30">Cancelar turno</button>
                                <div class="social-login-content">
                                    <div class="social-button">
                                         <Link  type="button" class="btn social facebook btn-flat btn-addon mb-3" to='/appointment'>
                                                Tomar turno  
                                         </Link>
                                    </div>  
                                 </div>
                                 <div class="social-login-content">
                                    <div class="social-button">
                                        <button onClick={deleteAcc}  type="button" class="btn btn-danger  btn-flat btn-addon mb-3" to='/appointment'>
                                                Eliminar la cuenta
                                         </button>
                                    </div>
                                </div>
                                <div class="register-link m-t-15 text-center">
                                </div>
                    </form>
                </div>
            </div>
        </div>
    </div>





 </div>
            
        </div>
    )
}

export default UserProfile