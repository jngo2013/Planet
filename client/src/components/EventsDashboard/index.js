import React, { Component } from 'react';
import HeroImage from '../HeroImage';
import MessageBoardContainer from './../../containers/MessageBoardContainer';

import TasksBox from './../TasksBox';
import moment from 'moment';
import Sidebar from './../Sidebar/index';
import './../Sidebar/sidebar.css'
import EventDetails from './../EventDetails';
import { compose } from 'redux';
import { connect } from 'react-redux';
import requireAuth from './../../hoc/requireAuth';
import { reduxForm, Field } from 'redux-form';
import TaskContainer from './../../containers/taskBox';
import GoogleApiWrapper from './../GoogleMap'


import { getUserTodos, updateCompleteUserTodoById, deleteTodoById } from '../../actions/allTodos';
// import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react';
import {  Container, Grid, GridRow, Header } from 'semantic-ui-react'
// import { LOAD_SPECIFIC_EVENT_ID, LOAD_SPECIFIC_EVENT_ID_ERROR} from "../../actions/types";
// import { getUserEvents, deleteUserEvent, selectEvent } from '../../actions/eventActions'
import './dashboard.css';
import { getUserEvents, deleteUserEvent, selectEvent, selectedEvent, updateEventTitle, updateEventDescription, updateEventDate, getAddress, updateEventLocation } from '../../actions/eventActions'


class EventDashboard extends Component {

  async componentDidMount()  {

    try {
      const eventId = this.props.specificEvent
      await this.props.selectedEvent(eventId);
      await this.props.selectedEvent(this.props.specificEvent)
      await this.props.getAddress(this.props.userSpecificEvent.directions)
   
       
    } catch (e) {
      console.log(e)
    }

  }

   updateTitle = (_id) => {
    let newEdit = prompt('Edit Something');
     console.log("youre updating title")
     console.log(newEdit)
     this.props.updateEventTitle(newEdit, this.props.userSpecificEvent._id)
   }
   updateDescription = (_id) => {
     let newEdit = prompt('Edit Something');
     console.log("You're updating the description")
     console.log(newEdit)
     this.props.updateEventDescription(newEdit, this.props.userSpecificEvent._id)
   }
   updateLocation = (_id) => {
     let newEdit = prompt('Input A Location/Address');
     this.props.updateEventLocation(newEdit, this.props.userSpecificEvent._id)
   }



  render() {
    return (
      <div>


        
        <Container>
              <EventDetails 
                title={this.props.userSpecificEvent.title}
                description={this.props.userSpecificEvent.description}
                dateCreated={moment(this.props.userSpecificEvent.date).format('LL')}
                // dateCreated={this.props.userSpecificEvent.date}
                titleUpdate={this.updateTitle}
                descriptionUpdate={this.updateDescription}
                locationUpdate={this.updateLocation}
                location={this.props.userSpecificEvent.directions}
                dateUpdate={this.props.userSpecificEvent.updateEventDate}
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
                
                <TasksBox />
                <TaskContainer
                eventId={this.props.specificEvent}
                 />
                  <Grid.Row>
                    <Grid.Column>
                    <GoogleApiWrapper
                  location={this.props.eventCoordinates}
                  directions={this.props.userSpecificEvent.directions}
                  />
                    </Grid.Column>
 
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                    <TasksBox />
                    </Grid.Column>
                  
                  </Grid.Row>
                
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
    eventCoordinates: state.event.eventCoordinates,
    eventCoordinatesError: state.event.eventCoordnatesError,

  };
};

const composedComponent =  compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserEvents, selectEvent, deleteUserEvent, selectedEvent, updateEventTitle, updateEventDescription, updateEventDate, getAddress, updateEventLocation })
)(EventDashboard);

export default requireAuth(composedComponent);