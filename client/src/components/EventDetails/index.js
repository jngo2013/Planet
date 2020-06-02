/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Segment, Button } from 'semantic-ui-react'
import './eventdetails.css';



const buttonFunction = () => {
 let newEdit = prompt("Edit Something");
 console.log(newEdit)



}



const EventDetails = (props) => (
  <div className="eventDetailsBox">
    <Container fluid textAlign='left'>
      {/* <Header as='h1' textAlign='left' className='header'>{props.title}<Button onClick={props.titleUpdate}>Edit</Button> </Header>
      <p className="eventDetails">
        {props.dateCreated} <Button onClick={buttonFunction}>Edit</Button>
      </p>
      <p className="eventDetails">
        {props.description} <Button onClick={props.descriptionUpdate}>Edit</Button>
      </p>
      <p className="eventLocation">
        {props.location} <Button onClick={props.locationUpdate}>Edit</Button>

      </p> */}
      
      <Header textAlign='left' className='event-header'>Name of event: {props.title}</Header>
      <Button onClick={props.titleUpdate}>Edit</Button>

      <Container>
          <p className="eventDetails">
            Date of the event: {props.dateCreated}
          </p>
          <Button onClick={props.descriptionUpdate}>Edit</Button>
      </Container>

      <Container>
          <p className="eventDetails">
          About event: {props.description}
          </p>
      </Container>

      <Container>
        <p className="eventDetails">
          Event Location: {props.location}
        </p>
        <Button onClick={props.locationUpdate}>Edit</Button>
      </Container>

    </Container>
  </div>
)

export default EventDetails;