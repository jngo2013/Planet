/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import './eventdetails.css';


const buttonFunction = () => {
 let newEdit = prompt("Edit Something");
 console.log(newEdit)
}


const EventDetails = (props) => (
  <div className="eventDetailsBox">
    <Container fluid textAlign='left'>
      
      <Header textAlign='left' className='event-header'>
        Name of event: {props.title}  
        <Button onClick={props.titleUpdate} size='mini' color='instagram' className='eventDetails-edit'>Edit</Button>
      </Header>
      
      <Container>
          <p className="eventDetails">
            Date of the event: {props.dateCreated}
          </p>
      </Container>

      <Container>
          <p className="eventDetails">
            About event: {props.description}
            <Button onClick={props.descriptionUpdate} size='mini' color='instagram' className='eventDetails-edit'>Edit</Button>
          </p>
      </Container>

      <Container>
        <p className="eventDetails">
          Event Location: {props.location}
          <Button onClick={props.locationUpdate} size='mini' color='instagram' className='eventDetails-edit'>Edit</Button>
        </p>
      </Container>

    </Container>
  </div>
)

export default EventDetails;
