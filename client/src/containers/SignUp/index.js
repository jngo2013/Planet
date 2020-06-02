import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Segment, Button, Grid, Container } from "semantic-ui-react";
import { email, length, required } from "redux-form-validators";
import axios from "axios";
import "./signup.css";

import { AUTH_USER, AUTH_USER_ERROR } from "../../actions/types";

class SignUp extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post("/api/auth/signup", formValues);
      localStorage.setItem("token", data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push("/usertodos");
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  };

  renderInput = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={meta.touched && meta.error}
        icon="file"
        iconPosition="left"
        autoComplete="off"
        placeholder="Username please"
      />
    );
  };

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
      <Container>
        <Grid.Row>
          <Grid.Column width={1}>
            <Form size="large" onSubmit={handleSubmit(this.onSubmit)}>
              <Segment stacked>
                <Field
                  name="email"
                  validate={[
                    required({ msg: "Email is required" }),
                    email({ msg: "You must provide a valid email address" }),
                  ]}
                  component={this.renderEmail}
                />
                <Field
                  name="password"
                  validate={[
                    required({ msg: "You must provide a password" }),
                    length({
                      minimum: 6,
                      msg: "Your password must be at least 6 characters long",
                    }),
                  ]}
                  component={this.renderPassword}
                />
                <Field
                  name="userName"
                  validate={[required({ msg: "You must provide a username" })]}
                  component={this.renderInput}
                />
                <div>
                  <Segment>
                    <label>Gender ( For avatar )</label>
                    <div className="gender-radio">
                      <label>
                        <Field
                          name="Gender"
                          component="input"
                          type="radio"
                          value="male"
                        />{" "}
                        Male
                      </label>
                      <label>
                        <Field
                          name="Gender"
                          component="input"
                          type="radio"
                          value="female"
                        />{" "}
                        Female
                      </label>
                      <label>
                        <Field
                          name="Gender"
                          component="input"
                          type="radio"
                          value="default"
                        />{" "}
                        Undefined
                      </label>
                    </div>
                  </Segment>
                </div>
                <Container className="signup-radio">
                  <Grid.Row>
                    <Grid.Column>
                      <Button
                        content="Sign Up"
                        color="facebook"
                        size="large"
                        type="submit"
                        disabled={invalid || submitting || submitFailed}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Container>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Container>
    );
  }
}

const asyncValidate = async ({ email }) => {
  try {
    const { data } = await axios.get(`/api/user/emails?email=${email}`);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: "Email is already taken" };
  }
};

export default reduxForm({
  form: "SignUp",
  asyncValidate,
  asyncChangeFields: ["email"],
})(SignUp);
