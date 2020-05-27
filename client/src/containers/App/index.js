import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import AllTodosList from '../AllTodosList';
import UserTodoList from '../UserTodoList';

import LandingPage from "../../components/LandingPage";
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import JoinEvent from '../JoinEvent'
import './app.css'
import EventsDashboard from './../../components/EventsDashboard';
import ShowEventContainer from './../../containers/ShowEventContainer'
import Form from './../../components/Form/index'
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './../../components/Navbar';
import CreateEvent from "../CreateEvent";


class App extends Component {
  render() {
    return (

      <div>
        <Navbar authenticated={this.props.authenticated}/>
        {/* <Route exact path='/eventsdashboard' component={EventsDashboard} /> */}

        {/* <div>
          <div className='sideBuffer'>

          </div>
        </div>
        <div className="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div> */}

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 1000 }}>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/testform' component={Form}/>
            <Route exact path='/createevent' component={CreateEvent}/>
            <Route exact path='/' component={SignUp}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/signout' component={SignOut}/>
            <Route exact path='/alltodos' component={ShowEventContainer}/>
            {/* <Route exact path='/alltodos' component={AllTodosList}/> */}
            <Route exact path='/usertodos' component={UserTodoList}/>
            {/* <Route exact path='/message' component={MessageBoard}/> */}
            <Route exact path='/joinEvent' component={JoinEvent}/>
            <Route exact path='/eventsdashboard' component={EventsDashboard} />
            
          </Grid.Column>
        </Grid>

      {/* // Events Dashboard page */}
        {/* <Navbar authenticated={this.props.authenticated}/> */}
        
      </div>
      

    )
  }
}

function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(App);
