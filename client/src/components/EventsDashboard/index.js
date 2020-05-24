import React from 'react';
import HeroImage from '../HeroImage';
import MessageBoard from './../MessageBoard';
import GoogleMap from './../GoogleMap';
import TasksBox from './../TasksBox';
import EventDetails from './../EventDetails';
// import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility, } from 'semantic-ui-react'


function EventsDashboard() {
  return (
    <div>
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
            <Grid.Column width={11}><MessageBoard /></Grid.Column>
            <Grid.Row>
              <Grid.Column><GoogleMap /></Grid.Column>
              <Grid.Column><TasksBox /></Grid.Column>
            </Grid.Row>
            
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default EventsDashboard;

