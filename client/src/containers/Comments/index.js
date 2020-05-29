import React from 'react';
import { Header, List, Button, Popup } from 'semantic-ui-react';

// import DeleteTodoModal from './../../../components/DeleteTodoModal';

export default (props) => {
  console.log(props)
  console.log("---------")
  if (props.messages.length === 0) {
    return <Header content='No comments yet'/>;
  } else {
    return props.messages.map(({_id, title, completed }) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left' >
            <p style={{ fontSize: '12px'}}>{this.props.messages.content}</p>
          </List.Content>

        </List.Item>
      );
    });
  }
}
