import React from "react";
import { Header, List } from "semantic-ui-react";

export default (props) => {
  if (props.messages.length === 0) {
    return <Header content="No comments yet" />;
  } else {
    return props.messages.map(({ _id, title, completed }) => {
      return (
        <List.Item key={_id}>
          <List.Content floated="left">
            <p style={{ fontSize: "12px" }}>{this.props.messages.content}</p>
          </List.Content>
        </List.Item>
      );
    });
  }
};
