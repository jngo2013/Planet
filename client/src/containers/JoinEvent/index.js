import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER } from '../../actions/types';



class JoinEvent extends Component {
  // When the user submits the form, send the formValues to /api/auth/signin
  onSubmit = async (formValues, dispatch) => {
    console.log(formValues.pin)
    try {
      const { data } = await axios.post('/api/event/join', formValues);
      localStorage.setItem('currentPin', formValues.pin);
      // dispatch({ type: AUTH_USER, payload: data.token });
      console.log(data)
      this.props.history.push('/counter');
    } catch (e) {
      throw new SubmissionError({
        password: 'Wrong pin',
        _error: 'No event to join!'
      });
    }
  }
  // set the token coming from data into localStorage under the key 'token'
  // Dispatch the action to the reducer to set the token as the state for authentication
  // Redirect the user to the '/counter' route
  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={ meta.touched && meta.error }
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email address'
      />
    )
  }
  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        type='password'
        fluid
        error={ meta.touched && meta.error }
        icon='lock'
        iconPosition='left'
        autoComplete='off'
        placeholder='pin'
      />
    )
  }
  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
        <Segment stacked>
          <Field
            name='pin'
            component={this.renderPassword}
            validate={
              [
                required({ msg: 'You must provide a pin' })
              ]
            }
          />
          <Button
            content='Join Event'
            color='teal'
            fluid
            size='large'
            type='submit'
            disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>
    )
  }
}
export default reduxForm({ form: 'JoinEvent '})(JoinEvent);