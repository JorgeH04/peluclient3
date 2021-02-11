import React from 'react'
import './TableData.css'

const TableData = ({appointments}) => {

    return (
        <td>
            {
            appointments[0] ?
             <span className='td-color'>
                <span className='td-flex-icons'>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    {appointments[0].name}
                </span>
                
            
              
                <span className='td-flex-icons'>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <a href={`tel:${appointments[0].phone}`}>{appointments[0].phone}</a>            
                </span>   

                <span className='td-flex-icons'>
                    <i className="fa fa-date" aria-hidden="true"></i>
                    <a href={`tel:${appointments[0].date}`}>{appointments[0].date}</a>            
                </span> 

                 <span className='td-flex-icons'>
                    <i className="fa fa-date" aria-hidden="true"></i>
                    <a href={`tel:${appointments[0].time}`}>{appointments[0].time}</a>            
                </span> 


                 <span className='td-flex-icons'>
                    <i className="fa fa-date" aria-hidden="true"></i>
                    <a href={`tel:${appointments[0].day}`}>{appointments[0].day}</a>            
                </span> 
            </span> 
            
            : <span className='td-empty'>vacío</span>
            } 
        </td>
    )
}

export default TableData
