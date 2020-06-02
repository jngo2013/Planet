import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { required } from 'redux-form-validators';
import axios from 'axios';
import requireAuth from './../../hoc/requireAuth';
import { GET_TASK } from '../../actions/types';
import { getAllTasks, postTask } from './../../actions/task';
import {
  Header,
  Form,
  Segment,
  Button,
  Comment,
} from 'semantic-ui-react';



class TaskContainer extends Component {

  componentDidMount() {
    this.props.getAllTasks(this.props.eventId);

  }

  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post(`/api/taskboard/task/${this.props.eventId}`, formValues, { headers: { 'authorization': localStorage.getItem('token') } })
      dispatch({ type: GET_TASK, payload: data });
    } catch (e) {
      throw e;
    }
  }

  renderInput = ({ input, meta }) => {
    return (
      <Form.TextArea
        {...input}
        error={meta.touched && meta.error}
        autoComplete='off'
        placeholder="Add your task here"
      />
    )
  }

  renderTasks = (task, tsk) => {
    return (
      <Comment key={tsk}>
        <Comment.Content>
          <Comment.Author>{task.user.userName}</Comment.Author>
          <Comment.Text>{task.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    )
  }




  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Segment>
          <Header as='h3' dividing>
            Task Box
          </Header>
          <Comment.Group>
            {this.props.tasks?.map((task,tsk) => this.renderTasks(task,tsk)) }
          </Comment.Group>
        
        <Form className='message-posting' size='large' reply onSubmit={handleSubmit(this.onSubmit)}>
          
            <Field
              name='text'
              validate={required({ msg: 'Please add a task' })}
              component={this.renderInput}
            />

            <Button
              content='Post'
              labelPosition='left'
              icon='edit'
              color='facebook'
              type='submit'

            />

        </Form>
        </Segment>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks }
}

export default compose(
  connect(mapStateToProps, { getAllTasks, postTask }),
  reduxForm({
    form: 'CreateEvent'
  })
)(TaskContainer);