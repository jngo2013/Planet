import React, { Component } from 'react';
import HeroImage from '../HeroImage';
import MessageBoardContainer from './../../containers/MessageBoardContainer';
import GoogleMap from './../GoogleMap';
import TasksBox from './../TasksBox';
import Sidebar from './../Sidebar/index';
import './../Sidebar/sidebar.css'
import EventDetails from './../EventDetails';
// import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react';
import {  Container, Grid } from 'semantic-ui-react'
// import { LOAD_SPECIFIC_EVENT_ID, LOAD_SPECIFIC_EVENT_ID_ERROR} from "../../actions/types";
// import { getUserEvents, deleteUserEvent, selectEvent } from '../../actions/eventActions'






class EventDashboard extends Component {

  componentDidMount() {
    console.log('Im hit')
  }



  render() {
    return (
      <div>
        <Container>
          <Grid.Row>
            <Grid.Column>
              <Sidebar/>

            </Grid.Column>
          </Grid.Row>
        </Container>
        <Container>
          <Grid>
            <Grid.Row>
              <HeroImage />
            </Grid.Row>
          </Grid>

        </Container>

        <Container>
          <Grid>
            <Grid.Row>
              <EventDetails />
              <Grid.Column width={11}><MessageBoardContainer /></Grid.Column>
              <Grid.Row>
                <Grid.Column><GoogleMap /></Grid.Column>
                <Grid.Column><TasksBox /></Grid.Column>
              </Grid.Row>

            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default EventDashboard;



