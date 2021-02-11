import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home' 
import Contact from './components/Contact/Contacto'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import Total from './components/Admin/AppointmentsList/Listatotal'
import UserProfile from './components/UserProfile/UserProfile'
import Appointment from './components/Appointment/Appointment'
import { ProtectedRoute } from './protected.route'
import {  AdminRoute } from './admin.route'

import UserList from './components/Admin/UsersList/UsersList'


import Nos from './components/Nos/Nos'

//import './App.css';          


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/about' component={Nos} />
          <Route path='/contacto' component={Contact} />

          <ProtectedRoute component={Appointment} path='/appointment' />
          <Route path='/admin' component={Admin} />
          <Route path='/total' component={Total} />
          <Route path='/userlist' component={UserList} />

          <ProtectedRoute component={UserProfile} path='/profile' />
          <Route path='*' component={() => '404 PAGE NOT FOUND'} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
