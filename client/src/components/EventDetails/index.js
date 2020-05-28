/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import './eventdetails.css';


const buttonFunction = () => {
  prompt("Edit Something");
}

const EventDetails = (props) => (
  <div className="eventDetailsBox">
    <Container fluid textAlign='left'>
      <Header as='h1' textAlign='left' className='header'>{props.title}<Button onClick={buttonFunction}>Edit</Button> </Header>
      <p className="eventDetails">
        {props.dateCreated} <Button onClick={buttonFunction}>Edit</Button>
      </p>
      <p className="eventDetails">
        {props.description} <Button onClick={buttonFunction}>Edit</Button>
      </p>
      

    </Container>
  </div>
)

export default EventDetails;