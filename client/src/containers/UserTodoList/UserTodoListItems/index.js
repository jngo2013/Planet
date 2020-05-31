import React from 'react';
import { Header, List, Button, Popup, Image } from 'semantic-ui-react';

import DeleteTodoModal from './../../../components/DeleteTodoModal';

import { withRouter, Link } from 'react-router-dom';

import './styles.css';

export default (props) => {
  console.log(props)
  console.log("---------")
  if (props.events.length === 0) {
    return <Header>No events yet.  Click <Link to='/createevent'>here</Link> to add one.</Header>;
  } else {
    return props.events.map(({_id, title, completed }) => {
      return (
        <List.Item key={_id}>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' floated='left' />
          <List.Content floated='left' className="list-content">
            <p>{title}</p>
          </List.Content>
          <List.Content floated='right'>
            
                {/* // <Button
                //   color='blue'
                //   content='Event Details'
                //   size='small'
                //   onClick={ (event) => props.handleRedirect(_id, completed) }
                // /> */}
                <Button animated='fade' onClick={ (event) => props.handleRedirect(_id, completed) } color='instagram' size='small'>
                  <Button.Content visible>Event Details</Button.Content>
                  <Button.Content hidden>See What's Up!</Button.Content>
                </Button>
              

              
              {/* // content={
              //   <Button
              //     color='green'
              //     content='Event Dashboard'
              //     // onClick={ (event) => props.handleEventSelect(_id, completed) }
              //     onClick={ (event) => props.handleRedirect(_id, completed) }
              //   />
              // }
            /> */}
            <DeleteTodoModal
              handleDelete={props.handleDelete}
              text={title}
              id={_id}
              
            />
          </List.Content>
        </List.Item>
      );
    });
  }
}
