import React from 'react';
import { Header, List, Button, Popup } from 'semantic-ui-react';

import DeleteTodoModal from './../../../components/DeleteTodoModal';

export default (props) => {
  console.log(props)
  console.log("---------")
  if (props.events.length === 0) {
    return <Header content='No events yet'/>;
  } else {
    return props.events.map(({_id, title, completed }) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left' >
            <p style={{ textDecoration: completed ? 'line-through' : 'none', fontSize: '20px'}}>{title}</p>
          </List.Content>
          <List.Content floated='right'>
            <Popup
              on='click'
              position='top right'
              trigger={
                <Button
                  color='blue'
                  content='Event Details'
                  size='small'
                />
              }
              content={
                <Button
                  color='green'
                  content='Event Dashboard'
                  // onClick={ (event) => props.handleEventSelect(_id, completed) }
                  onClick={ (event) => props.handleRedirect(_id, completed) }
                />
              }
            />
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
