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
import { email, required } from "redux-form-validators";
import axios from "axios";
import { AUTH_USER } from "../../actions/types";
import "./signin.css";
import { Link } from "react-router-dom";
import HorizontalDivider from "./../../components/HorizontalDivider";

class SignIn extends Component {
  // When the user submits the form, send the formValues to /api/auth/signin
  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post("/api/auth/signin", formValues);
      localStorage.setItem("token", data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push("/usertodos");
    } catch (e) {
      throw new SubmissionError({
        email: "Wrong email",
        password: "Wrong password",
        _error: "Signin failed!",
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
        placeholder="Email address"
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
        placeholder="password"
      />
    );
  };
  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <div className="image">
        <Container>
          <div>
            <Header as="h2" icon textAlign="center">
              <Icon
                name="sign in"
                circular
                size="massive"
                className="sign-in-icon"
              />
              <HorizontalDivider title="Sign In" />
            </Header>

            <Form size="large" onSubmit={handleSubmit(this.onSubmit)}>
              <Segment stacked>
                <Field
                  name="email"
                  component={this.renderEmail}
                  validate={[
                    required({ msg: "Email is required" }),
                    email({ msg: "You must provide a valid email address" }),
                  ]}
                />
                <Field
                  name="password"
                  component={this.renderPassword}
                  validate={[required({ msg: "You must provide a password" })]}
                />
                <p>
                  Don't have an account? Click <Link to="/signup">here</Link> to
                  sign up!
                </p>
                <Button
                  content="Sign In"
                  color="purple"
                  // fluid
                  size="large"
                  type="submit"
                  disabled={invalid || submitting || submitFailed}
                />
              </Segment>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}
export default reduxForm({ form: "SignIn " })(SignIn);
