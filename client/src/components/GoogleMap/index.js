import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const GoogleMap = () => (
  <Card>
    <Image src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Google Map Will Go Here!</Card.Header>
      <Card.Meta>La Taqueria</Card.Meta>
      <Card.Meta>2889 Mission St, San Francisco, CA 94110</Card.Meta>
      <Card.Description>
        There's no parking.  EVER.  Take BART.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

export default GoogleMap;