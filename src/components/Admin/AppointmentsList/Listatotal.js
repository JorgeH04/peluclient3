import React, { Component } from 'react'
 
export default class AppointmentsList  extends Component {
    constructor() {
    super();
    this.state = {
   
      appointments: []
       
      };
      // this.handleChange = this.handleChange.bind(this);
      // this.addPost = this.addPost.bind(this);

    }

    componentDidMount() {
      this.fetchPosts();
  
    }

    fetchPosts() {
      fetch('http://localhost:4000/getappointments')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({appointments: data});
          console.log(this.state.appointments)
        });
  
        
    }
  

    deleteAppointment(_id) {

       fetch(`http://localhost:4000/delete/${_id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.fetchPosts();
        });

        alert('El turno ha sido borrado')
        window.location.replace('/total')
    
      }





     render() {    

       return (

        <div >
        <div id="right-panel" class="right-panel">
    
         
    
            <div class="breadcrumbs">
                <div class="col-sm-4">
                    <div class="page-header float-left">
                        <div class="page-title">
                            <h1></h1>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="page-header float-right">
                        <div class="page-title">
                           
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="content mt-3">
                <div class="animated fadeIn">
                    <div class="row">
    
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title"> <u>Todos los turnos </u>
                                    </strong>
                                </div>
                                <div class="card-body">
                                    <table id="bootstrap-data-table-export" class="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Teléfono</th>  
                                                <th>Fecha</th>     
                                                <th>Hora</th>  
                                                <th>Borrar </th>
                                            </tr>
                                        </thead>

                                               {
                                         this.state.appointments.map((user, i) => 
                                             {

                                                return(
                                         <tbody>
                                            <tr>
                                                <td   > {user.name}   </td>
                                                <td   >  {user.phone} </td> 
                                                <td   > {user.date}   </td>
                                                <td   >  {user.time} </td>  
                                                <td   >
                                                      <button 
                                                      onClick={() => this.deleteAppointment(user._id)}
                                                      class="btn btn-success btn-flat m-b-30 m-t-30">
                                                      Borrar</button>
                                                </td>
                                            </tr>
                                     

                                        </tbody>


                                             )
                                      })
                                     }

                                    
 

                                      


                                                
                                    </table>
                                </div>
                            </div>
                        </div>
    
    
                    </div>
                    </div> 
                    </div> 
                    </div> 
        
    
 

   </div >

)
}
}

// export default AppointmentsList

