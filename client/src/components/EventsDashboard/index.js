import React, { Component } from "react";
import MessageBoardContainer from "./../../containers/MessageBoardContainer";
import moment from "moment";
import Sidebar from "./../Sidebar/index";
import EventDetails from "./../EventDetails";
import { compose } from "redux";
import { connect } from "react-redux";
import requireAuth from "./../../hoc/requireAuth";
import { reduxForm } from "redux-form";
import TaskContainer from "./../../containers/taskBox";
import GoogleApiWrapper from "./../GoogleMap";
import { Container, Grid } from "semantic-ui-react";
import "./dashboard.css";
import {
  getUserEvents,
  deleteUserEvent,
  selectEvent,
  selectedEvent,
  updateEventTitle,
  updateEventDescription,
  getAddress,
  updateEventLocation,
} from "../../actions/eventActions";

class EventDashboard extends Component {
  async componentDidMount() {
    try {
      const eventId = this.props.specificEvent;
      await this.props.selectedEvent(eventId);
      await this.props.selectedEvent(this.props.specificEvent);
      await this.props.getAddress(this.props.userSpecificEvent.directions);
    } catch (e) {}
  }

  updateTitle = (_id) => {
    let newEdit = prompt("Edit Something");
    this.props.updateEventTitle(newEdit, this.props.userSpecificEvent._id);
  };
  updateDescription = (_id) => {
    let newEdit = prompt("Edit Something");
    this.props.updateEventDescription(
      newEdit,
      this.props.userSpecificEvent._id
    );
  };
  updateLocation = (_id) => {
    let newEdit = prompt("Input A Location/Address");
    this.props.updateEventLocation(newEdit, this.props.userSpecificEvent._id);
  };

  render() {
    return (
      <div>
        <Container>
          <EventDetails
            title={this.props.userSpecificEvent.title}
            description={this.props.userSpecificEvent.description}
            dateCreated={moment(this.props.userSpecificEvent.date).format("LL")}
            titleUpdate={this.updateTitle}
            descriptionUpdate={this.updateDescription}
            locationUpdate={this.updateLocation}
            location={this.props.userSpecificEvent.directions}
            dateUpdate={this.props.userSpecificEvent.updateEventDate}
          />

          <Grid columns={3} stackable>
            <Grid.Column>
              <MessageBoardContainer eventId={this.props.specificEvent} />
            </Grid.Column>
            <Grid.Column>
              <Sidebar className="sidebar" />
              <TaskContainer eventId={this.props.specificEvent} />
            </Grid.Column>
            <Grid.Column>
              <h1>You'll be going here:</h1>
              <GoogleApiWrapper
                location={this.props.eventCoordinates}
                directions={this.props.userSpecificEvent.directions}
              />
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
}

const composedComponent = compose(
  reduxForm({ form: "addTodo" }),
  connect(mapStateToProps, {
    getUserEvents,
    selectEvent,
    deleteUserEvent,
    selectedEvent,
    updateEventTitle,
    updateEventDescription,
    getAddress,
    updateEventLocation,
  })
)(EventDashboard);

export default requireAuth(composedComponent);
