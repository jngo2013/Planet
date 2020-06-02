import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import {
  Form,
  Segment,
  Button,
  Header,
  Icon,
  Container,
} from "semantic-ui-react";
import { required } from "redux-form-validators";
import axios from "axios";

import requireAuth from "./../../hoc/requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import { ADD_USER_EVENT } from "../../actions/types";
import { getUserEvents, selectEvent } from "../../actions/eventActions";

import HorizontalDivider from "./../../components/HorizontalDivider";
import "./joinevent.css";

class JoinEvent extends Component {
  // When the user submits the form, send the formValues to /api/auth/signin
  onSubmit = async (formValues, dispatch) => {
    console.log(formValues.pin);
    try {
      const { data } = await axios.post("/api/event/join", formValues, {
        headers: { authorization: localStorage.getItem("token") },
      });
      localStorage.setItem("currentPin", formValues.pin);
      dispatch({ type: ADD_USER_EVENT });
      this.props.selectEvent(data._id);
      this.props.history.push("/eventsdashboard");
    } catch (e) {
      throw new SubmissionError({
        password: "Wrong pin",
        _error: "No event to join!",
      });
    }
  };
  // set the token coming from data into localStorage under the key 'token'
  // Dispatch the action to the reducer to set the token as the state for authentication
  // Redirect the user to the '/counter' route
  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={meta.touched && meta.error}
        icon="user"
        iconPosition="left"
        autoComplete="off"
        placeholder="User Name"
      />
    );
  };
  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        type="password"
        fluid
        error={meta.touched && meta.error}
        icon="lock"
        iconPosition="left"
        autoComplete="off"
        placeholder="pin"
      />
    );
  };
  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <div>
        <Container>
          <Header as="h2" icon textAlign="center">
            <Icon
              name="calendar check outline"
              circular
              size="massive"
              className="sign-in-icon"
            />
            <HorizontalDivider title="Join An Event" />
          </Header>

          <Form size="large" onSubmit={handleSubmit(this.onSubmit)}>
            <Segment stacked>
              <Field
                name="pin"
                component={this.renderPassword}
                validate={[required({ msg: "You must provide a pin" })]}
              />
              <Field
                name="username"
                component={this.renderEmail}
                validate={[required({ msg: "You must provide a username" })]}
              />
              <Button
                content="Join Event"
                color="teal"
                size="large"
                type="submit"
                disabled={invalid || submitting || submitFailed}
              />
            </Segment>
          </Form>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEvents: state.event.userEvents,
  };
}
const composedComponent = compose(
  reduxForm({ form: "JoinEvent" }),
  connect(mapStateToProps, { getUserEvents, selectEvent })
)(JoinEvent);

export default requireAuth(composedComponent);
