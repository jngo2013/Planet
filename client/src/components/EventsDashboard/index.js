import React, { Component } from 'react';
import HeroImage from '../HeroImage';
import MessageBoardContainer from './../../containers/MessageBoardContainer';
import GoogleMap from './../GoogleMap';
import TasksBox from './../TasksBox';
import moment from 'moment';
import Sidebar from './../Sidebar/index';
import './../Sidebar/sidebar.css'
import EventDetails from './../EventDetails';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from './../../hoc/requireAuth';
import { reduxForm, Field } from 'redux-form';
// import TaskContainer from './../../containers/taskBox';

import { getUserTodos, updateCompleteUserTodoById, deleteTodoById } from '../../actions/allTodos';
// import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react';
import {  Container, Grid, GridRow, Header } from 'semantic-ui-react'
// import { LOAD_SPECIFIC_EVENT_ID, LOAD_SPECIFIC_EVENT_ID_ERROR} from "../../actions/types";
// import { getUserEvents, deleteUserEvent, selectEvent } from '../../actions/eventActions'

import { getUserEvents, deleteUserEvent, selectEvent, selectedEvent } from '../../actions/eventActions'
import './dashboard.css';


class EventDashboard extends Component {

  async componentDidMount()  {

    try {
      const eventId = this.props.specificEvent
      await this.props.selectedEvent(eventId);
      // the way you access the summoned event is through this prop below
      console.log(this.props.userSpecificEvent, "LINE 33")
      console.log(this.props.userSpecificEvent.title, "THIS IS THE TITLE")
      console.log(this.props.userSpecificEvent.description, "THIS IS THE DESCRIPTION")
      console.log(this.props.userSpecificEvent.date, "THIS IS THE DATE OF EVENT")
      console.log(this.props.userSpecificEvent.attending)
      console.log("-----")

    } catch (e) {

    }

  }


  render() {
    return (
      <div>
        
        {/* <Container>
          <Grid.Row>
            <Grid.Column>
              <Sidebar className='sidebar' />

            </Grid.Column>
          </Grid.Row>
        </Container> */}

        {/* <Container>
          <Grid>
            <Grid.Row>
              <HeroImage />
            </Grid.Row>
          </Grid>
        </Container> */}

        <Container>

          {/* <Grid>
            <Grid.Row>
              <EventDetails 
                title={this.props.userSpecificEvent.title}
                description={this.props.userSpecificEvent.description}
                dateCreated={moment(this.props.userSpecificEvent.date).format('LL')}
                // dateCreated={this.props.userSpecificEvent.date}
              /> */}

              {/* <Grid.Column width={11} className='map-taskbox'>
                <MessageBoardContainer 
                  eventId={this.props.specificEvent}
                />
              </Grid.Column> */}
              
              
              {/* <Grid.Row>
                <Grid.Column><GoogleMap /></Grid.Column>
                <Grid.Column>
                  <TasksBox />
                  <TaskContainer/>
                  </Grid.Column>
              </Grid.Row>

            </Grid.Row>
          </Grid> */}

          
              <EventDetails 
                title={this.props.userSpecificEvent.title}
                description={this.props.userSpecificEvent.description}
                dateCreated={moment(this.props.userSpecificEvent.date).format('LL')}
                // dateCreated={this.props.userSpecificEvent.date}
              />

          {/* Message Board */}
          <Grid columns={3} stackable>
            <Grid.Column>
              <MessageBoardContainer 
                eventId={this.props.specificEvent}
              />
            </Grid.Column>

            {/* Sidebar */}
            <Grid.Column>
              <Sidebar className='sidebar' /> 
            </Grid.Column>
      
      
            <Grid.Column>
              <Grid
                centered
                columns={3}
                padded
                stackable
                style={{ margin: '-1.5em', width: 400 }}
                textAlign='center'
              >
                <GoogleMap />
                <TasksBox />
              </Grid>
            </Grid.Column>

          </Grid>
        </Container>
    
        


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userSpecificEvent: state.event.userSpecificEvent,
    specificEvent: state.event.specificEvent,
    specificEventError: state.event.specificEventError,
    deleteEventError: state.event.deleteEventError,

  };
};

const composedComponent =  compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserEvents, selectEvent, deleteUserEvent, selectedEvent })
)(EventDashboard);

export default requireAuth(composedComponent);



