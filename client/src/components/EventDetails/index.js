/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import './eventdetails.css';


const buttonFunction = () => {
  prompt("Edit Something");
}

const EventDetails = () => (
  <div className="eventDetailsBox">
    <Container fluid textAlign='left'>
      <Header as='h1' textAlign='left' className='header'>EVENT NAME WILL GO HERE <Button onClick={buttonFunction}>Edit</Button> </Header>
      <p className="eventDetails">
        Event details will go here.  This is from the "Create Event" form. <Button onClick={buttonFunction}>Edit</Button>
      </p>
      <p className="eventDetails">
        Event details will go here.  This is from the "Create Event" form. <Button onClick={buttonFunction}>Edit</Button>
      </p>
    </Container>
  </div>
)

export default EventDetails;