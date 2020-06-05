import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Container } from "semantic-ui-react";

import UserTodoList from "../UserTodoList";

import SignUp from "../SignUp";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import JoinEvent from "../JoinEvent";
import Profile from "./../../containers/Profile";
import EventsDashboard from "./../../components/EventsDashboard";
import ShowEventContainer from "./../../containers/ShowEventContainer";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./../../components/Navbar";
import CreateEvent from "../CreateEvent";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Navbar authenticated={this.props.authenticated} />
        </Container>


       {/*<div className='hero'>*/}
         <div className='hero-overlay'>
           <h1 className='hero-title'>Planet.Com</h1>
         </div>

        <Container fluid className='app-main-container'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
                <Container className="main-cover">
                  <Route exact path="/" component={SignIn} />
                  <Route exact path="/signup" component={SignUp} />
                </Container>
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signout" component={SignOut} />
                <Route exact path="/createevent" component={CreateEvent} />
                <Route exact path="/profile" component={Profile} />
                <Route
                  exact
                  path="/eventsdashboard"
                  component={EventsDashboard}
                />
                <Route exact path="/alltodos" component={ShowEventContainer} />
                <Route exact path="/usertodos" component={UserTodoList} />
                <Route exact path="/joinEvent" component={JoinEvent} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <section></section>
        <div className="footer">
          <div id="button"><h2 className='footer-contact'>Contact&nbsp;us</h2></div>
            <div className='space'>

            </div>
          <div id="container">
            <div id="cont">
              <div className="footer_center">
                    <div className='footer-main'>
                        <a href="https://github.com/Kerry-Jr" target="_blank">
                            <img className='foot-image' src="https://avatars2.githubusercontent.com/u/59150488?s=460&u=a39e0505b20d0baa7e3ddc531c7b0a29b9855bc5&v=4" alt="img of Kerry Smith"/>
                        <p className='footer-text'>Kerry Smith</p>
                        </a>
                        <a href="https://github.com/jngo2013" target="_blank">
                            <img className='foot-image' src="https://ca.slack-edge.com/TUFNTT7ND-UUUANP878-152c8bd24b27-512" alt="img of Jimmy Ngo"/>
                        <p className='footer-text'>Jimmy Ngo</p>
                        </a>
                        <a href="https://github.com/Guillermo-Martin" target="_blank">
                            <img className='foot-image' src="https://avatars1.githubusercontent.com/u/57199674?s=460&v=4" alt="img of Guillermo-Martin"/>
                        <p className='footer-text'>Guillermo Martin</p>
                        </a>
                        <a href="https://github.com/scott-whitney" target="_blank">
                            <img className='foot-image' src="https://ca.slack-edge.com/TUFNTT7ND-UUS4D420G-ba76b1c50983-512" alt="img of Scott Whitney"/>
                        <p className='footer-text'>Scott Whitney</p>
                        </a>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
export default connect(mapStateToProps)(App);
