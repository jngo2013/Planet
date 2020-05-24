// this is the message board.  use this component in an events page (will probably go in kerry's page).
// import this to whatever component you plan on using this in.
// POSSIBLE NEXT STEPS FOR THIS COMPONENT:  
// X 1.  this may need to be a container.
// 2.  for every user, make a comment thing (will probably have to use map).

import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

// NEXT STEPS:
// X 1.  turn this into a container
// X 2.  move this into the containers folder
// 3.  create an onSubmit function like in in the UserTodoList index.js
//     -the onSubmit function should make an axios POST request to whatever the backend called it
// 4.  see form below (where button is)
// 5.  add a 'componentDidMount() function that will get all user events


class MessageBoardContainer extends Component {

  // function to hit the backend should go here
  onSubmit = (formValues) => {
    console.log(formValues);
    alert("You clicked the Add Reply button");
  }


  render() {
    return (
      <Comment.Group>
        <Header as='h3' dividing>
          Message Board
      </Header>

        <Comment>
          {/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>


        {/* 1.  Form will need an 'onSubmit' prop
      2.  the onSubmitProp will run a handleSubmit function
      3.  the handlesubmit function will take the onSubmit function as an argument */}

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={this.onSubmit} />
        </Form>
      </Comment.Group>
    );
  }

}

export default MessageBoardContainer;
