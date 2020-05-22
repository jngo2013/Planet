// this is the message board.  use this component in an events page (will probably go in kerry's page).
// import this to whatever component you plan on using this in.
// POSSIBLE NEXT STEPS FOR THIS COMPONENT:  
// 1.  this may need to be a container.
// 2.  for every user, make a comment thing (will probably have to use map).

import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


function MessageBoard() {
  return(
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

    <Comment>
      {/* <Comment.Avatar src='/images/avatar/small/elliot.jpg' /> */}
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          {/* <Comment.Avatar src='/images/avatar/small/jenny.jpg' /> */}
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      {/* <Comment.Avatar src='/images/avatar/small/joe.jpg' /> */}
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
  );
}

export default MessageBoard;
