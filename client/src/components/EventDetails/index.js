/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import './eventdetails.css';




const EventDetails = (props) => (
  <div className="eventDetailsBox">
    <Container fluid textAlign='left'>
      
      <Header textAlign='left' className='event-header'>Name of event: {props.title}</Header>

      <Container>
          <p className="eventDetails">
            Date of the event: {props.dateCreated}
          </p>
      </Container>

      <Container>
          <p className="eventDetails">
          About event: {props.description}
          </p>
      </Container>

    </Container>
  </div>
)

export default EventDetails;