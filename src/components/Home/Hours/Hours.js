import React ,{useState, useEffect} from 'react'
import './Hours.css'
import { Link } from 'react-router-dom'

import {time} from '../../../time'

const Hours = () => {
    const [day, setDay] = useState(0)

    useEffect(() => {

        let {day} = time()
        setDay(day)
    
    }, [])

    return (
        <div className='hours' id='hours-navigate'>

            <div className='hours-container'>
                <h1>Horarios de trabajo</h1>
                <div className='hours-flex'>
                    <div className={day === 0 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Buen Finde!</h2>
                        <p>10.00 am to 15.00 pm</p>
                    </div>
                    <div className={day === 1 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Lun</h2>
                        <p>10.00 am to 15.30 pm</p>
                    </div>
                    <div className={day === 2 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Mar</h2>
                        <p>10.00 am to 14.30 pm</p>
                    </div>
                    <div className={day === 3 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Mier</h2>
                        <p>10.00 am to 14.30 pm</p>
                    </div>
                    <div className={day === 4 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Jue</h2>
                        <p>10.00 am to 15.00 pm</p>
                    </div>
                    <div className={day === 5 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Vier</h2>
                        <p>10.00 am to 15.30 pm</p>
                    </div>
                    <div className={day === 6 ? `active-day hours-box `:  `not-active-day hours-box ` }>
                        <h2>Sab</h2>
                        <p className='text-center'>10.00 am to 15.00 pm</p>
                    </div>
                </div>
                <div className='hours-btn-div'>
                    <Link to='/appointment'>
                        <button className='hours-btn'>Turnos acá</button>
                    </Link>
                </div>
            </div>     
        </div>
    )
}

export default Hours
