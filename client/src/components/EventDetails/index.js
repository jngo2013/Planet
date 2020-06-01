/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import './eventdetails.css';




const EventDetails = (props) => (
  <div className="eventDetailsBox">
    <Container fluid textAlign='left'>
      <Segment>
        <Header as='h1' textAlign='left' className='header'>Name of event: {props.title} </Header>
      </Segment>


     <Container>
       <Segment>
         <p className="eventDetails">
          Date of the event: {props.dateCreated}
         </p>
       </Segment>
     </Container>
      <Container>
        <Segment>
          <p className="eventDetails">
          About event: {props.description}
          </p>

        </Segment>
      </Container>


      

    </Container>
  </div>
)

export default EventDetails;