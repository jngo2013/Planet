import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react'

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

import "react-datepicker/dist/react-datepicker.css";
import Navbar from './../../components/Navbar';
import CreateEvent from "../CreateEvent";
import HeroImage from "../../components/HeroImage";


class App extends Component {
  render() {
    return (

      <div>
        <Container fluid>
        <Navbar authenticated={this.props.authenticated}/>
        </Container>
       <div className='hero'>
         <div className='hero-overlay'>
           <h1 className='hero-title'>Robo-Planner.com</h1>
         </div>
         <img src='https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' className='hero-image'/>
       </div>
        <Route exact path='/eventsdashboard' component={EventsDashboard} />
        <Route exact path='/createevent' component={CreateEvent}/>

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 1000 }}>
            <Route exact path='/' component={LandingPage}/>


            <Route exact path='/' component={SignUp}/>
            <Route exact path='/signin' component={SignIn}/>
            <Route exact path='/signout' component={SignOut}/>
            <Route exact path='/alltodos' component={ShowEventContainer}/>
            {/* <Route exact path='/alltodos' component={AllTodosList}/> */}
            <Route exact path='/usertodos' component={UserTodoList}/>
            {/* <Route exact path='/message' component={MessageBoard}/> */}
            <Route exact path='/joinEvent' component={JoinEvent}/>

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
