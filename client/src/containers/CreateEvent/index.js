import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Header, Form, Segment, Message, List, Pagination, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { length, required} from 'redux-form-validators';
import axios from 'axios';
import requireAuth from './../../hoc/requireAuth';
import DatePicker from 'react-datepicker';
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'

// import { getUserTodos, updateCompleteUserTodoById, deleteTodoById } from '../../actions/allTodos';
// import { ADD_USER_TODO, ADD_USER_TODO_ERROR } from '../../actions/types';


// import UserTodoListItems from './UserTodoListItems';



  class CreateEvent extends Component {

    state = {
      startDate: new Date()  };   handleChange = date =>
    {    this.setState({      startDate: date    });  };


    // state = {
    //   currentDate: new Date()
    //
    // }
  
  
  
    onSubmit = async (formValues, dispatch) => {
    console.log(formValues);
    // try {
    //   const { data } = await axios.post('/api/auth/signup', formValues);
    //   localStorage.setItem('token', data.token);
    //   dispatch({ type: AUTH_USER, payload: data.token });
    //   this.props.history.push('/counter');
    // } catch (e) {
    //   dispatch({ type: AUTH_USER_ERROR, payload: e });
    // }
  }
  renderInput = ({ input, meta }) => {
    return (
      <Form.Input className='eventForm'
        {...input}
        fluid
        label

        error={ meta.touched && meta.error }
        // icon='user'
        // iconPosition='left'
        autoComplete='off'
        placeholder='Do not leave blank'
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
          placeholder='PIN'
        />
      )
    }



  renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <>
          <DatePicker {...input} dateForm="MM/DD/YYYY" selected={this.state.startDate} />
          {touched && error && <span>{error}</span>}
    </>
  );

  render() {

    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <div>
      <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
      <Segment stacked>
        <Field
          name='title'
          validate={
            [
              required({ msg: 'Title is required' })
            ]
          }
          component={this.renderInput}
        />
        <Field
          name='date'
          validate={
            [
              required({ msg: 'Date of event required' })
            ]
          }
          component={this.renderDatePicker}
        />
        {/*<Field*/}
        {/*  name='startTime'*/}
        {/*  validate={*/}
        {/*    [*/}
        {/*      required({ msg: 'Start-time required' })*/}
        {/*    ]*/}
        {/*  }*/}
        {/*  component={this.renderInput}*/}
        {/*/>*/}
        {/*<Field*/}
        {/*  name='finishTime'*/}
        {/*  validate={*/}
        {/*    [*/}
        {/*      required({ msg: 'Finish-time is required' })*/}
        {/*    ]*/}
        {/*  }*/}
        {/*  component={this.renderInput}*/}
        {/*/>*/}
        <Field
          name='description'
          validate={
            [
              required({ msg: 'Description is required' })
            ]
          }
          component={this.renderInput}
        />
       
        <Field
          name='pin'
          label='password'

          validate={
            [
              required({ msg: '4-digit pin is required' }),
              length({ minimum: 4, maximum: 4, msg: 'example: 0000'})
            ]
          }
          component={this.renderPassword}
        />
       
        <Button
          content='Create Event'
          color='violet'
          fluid
          size='large'
          type='submit'
          disabled={ invalid || submitting || submitFailed }
        />
      </Segment>
    </Form>
  </div>
    )
  }
}

export default reduxForm({
  form: 'CreateEvent'
})(CreateEvent);

