import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { required } from "redux-form-validators";
import axios from "axios";
import moment from "moment";
import { GET_MESSAGE } from "../../actions/types";
import { getAllMessages, postMessage } from "./../../actions/message";
import { Header, Form, Segment, Button, Comment } from "semantic-ui-react";
import "./messageboard.css";

class MessageBoardContainer extends Component {
  componentDidMount() {
    this.props.getAllMessages(this.props.eventId);
  }

  onSubmit = async (formValues, dispatch) => {
    const { reset } = this.props;
    try {
      const {
        data,
      } = await axios.post(
        `/api/dashboard/comment/${this.props.eventId}`,
        formValues,
        { headers: { authorization: localStorage.getItem("token") } }
      );
      dispatch({ type: GET_MESSAGE, payload: data });
      reset("CreateEvent");
    } catch (e) {
      throw e;
    }
  };

  renderInput = ({ input, meta }) => {
    return (
      <Form.TextArea
        {...input}
        error={meta.touched && meta.error}
        autoComplete="off"
        placeholder="Add your comment here"
      />
    );
  };

  renderMessages = (message, idx) => {
    return (
      <Comment key={idx}>
        <Comment.Content>
          <Comment.Avatar src={message.user.Gender} />
          <Comment.Author className="message-userName">
            {message.user.userName}
          </Comment.Author>
          <Comment.Metadata className="message-time">
            {moment(message.date).format("h:mma MMM Do, YYYY")}
          </Comment.Metadata>
          <Comment.Text className="message-userPost">
            {message.text}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="message-board">
        <Segment className="view-messages">
          <Header as="h3" dividing>
            Event Message Board
          </Header>
          <Comment.Group>
            <Segment>
              {this.props.messages.map((message, idx) =>
                this.renderMessages(message, idx)
              )}
            </Segment>
          </Comment.Group>
        </Segment>
        <Form
          className="message-posting"
          size="large"
          reply
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <Segment stacked>
            <h2 align="left">Add Your Message Here</h2>
            <Field
              name="text"
              validate={required({ msg: "Please add a message" })}
              component={this.renderInput}
            />

            <Button
              content="Post"
              labelPosition="left"
              icon="edit"
              color="facebook"
              type="submit"
            />
          </Segment>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { messages: state.messages.content };
}

export default compose(
  connect(mapStateToProps, { getAllMessages, postMessage }),
  reduxForm({
    form: "CreateEvent",
  })
)(MessageBoardContainer);
