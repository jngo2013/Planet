import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Header, Form, Segment, Message, List, Pagination, Button, Icon, Container, Grid, GridColumn, GridProps, GridRow } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
import { length, required} from 'redux-form-validators';
import axios from 'axios';
import requireAuth from './../../hoc/requireAuth';
import DatePicker from 'react-datepicker';
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import './createevent.css'
import { compose } from 'redux';

import { getUserTodos, updateCompleteUserTodoById, deleteTodoById } from '../../actions/allTodos';
import { getUserEvents } from '../../actions/eventActions'
// import { getUserTodos, updateCompleteUserTodoById, deleteTodoById } from '../../actions/allTodos';
import { ADD_USER_EVENT } from '../../actions/types'
import { AUTH_USER, ADD_USER_TODO, ADD_USER_TODO_ERROR } from '../../actions/types';


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
    try {
      const { data } = await axios.post('/api/event/create', formValues,  { headers: { 'authorization': localStorage.getItem('token')}});;

      dispatch({ type: ADD_USER_EVENT })
      this.props.getUserEvents();
      this.props.history.push('/alltodos');
    } catch (e) {
      throw new SubmissionError({
        password: 'Wrong pin',
        _error: 'No event to join!'
      });
    }
  }
  renderInput = ({ input, meta }) => {
    return (
      <Form.Input className='eventForm'
                  {...input}
                  fluid
        // label

                  error={ meta.touched && meta.error }
        icon='file'
        iconPosition='left'
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
        icon='key'
        iconPosition='left'
        autoComplete='off'
        placeholder='PIN'
      />
    )
  }



  renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <div className='customDatePickerWidth'>
      <DatePicker {...input} dateForm="MM/DD/YYYY" selected={this.state.startDate} />
      {touched && error && <span>{error}</span>}
    </div>
  );

  render() {

    const { handleSubmit, invalid, submitting, submitFailed, pristine, reset } = this.props;
    return (
      <div className='eventForm'>
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <h2 align='left'>Name of event</h2>
            <Field
              name='title'
              validate={
                [
                  required({ msg: 'Please name your event!' })
                ]
              }
              component={this.renderInput}
            />
            <h3 align='left'>Date of the event</h3>
            <Field className='dateField'
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
            <h3 align='left' >Describe the event for your guests.</h3>
            <Field className='text-area'
                   name='description'
                   validate={
                     [
                       required({ msg: 'Description is required' })
                     ]
                   }
                   component={this.renderInput}
                   className='field'
            />
            <h3 align='left'>4-Digit access code</h3>
            <p>This will be used for inviting guest who can update the event.</p>
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

              size='large'
              type='submit'
              disabled={ invalid || submitting || submitFailed }
            />
            <Button
              content='Reset'
              color='red'
              floated
              negative
              size='large'
             type='button'
              active={ pristine || submitting }
              onClick={reset}
            />
            <Button animated>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Segment>
        </Form>
      </div>
    )
  }
}

// export default requireAuth(reduxForm({
//   form: 'CreateEvent'
// }),
// connect(mapStateToProps, { getUserTodos, updateCompleteUserTodoById, deleteTodoById })
// (CreateEvent));
function mapStateToProps(state) {
  return {
    userEvents: state.event.userEvents,
    
  }
}

const composedComponent = compose(
  reduxForm({ form: 'CreateEvent'}),
  connect(mapStateToProps, { getUserEvents })
)(CreateEvent)

export default requireAuth(composedComponent)

