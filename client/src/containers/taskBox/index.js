import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { required } from "redux-form-validators";
import axios from "axios";
import { POST_TASK } from "../../actions/types";
import { getAllTasks, postTask } from "./../../actions/task";
import "./taskbox.css";
import { Header, Form, Segment, Button, Comment } from "semantic-ui-react";

class TaskContainer extends Component {
  async componentDidUpdate() {
    await this.props.getAllTasks(this.props.eventId);
  }

  onSubmit = async (formValues, dispatch) => {
    const { reset } = this.props;
    try {
      const {
        data,
      } = await axios.post(
        `/api/taskboard/task/${this.props.eventId}`,
        formValues,
        { headers: { authorization: localStorage.getItem("token") } }
      );
      dispatch({ type: POST_TASK, payload: data });
      reset("CreateTask");
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
        placeholder="Add your task here"
      />
    );
  };

  renderTasks = (task, idx) => {
    return (
      <Comment key={idx}>
        <Comment.Content>
          <Comment.Content className="view-tasks">
            <Comment.Author className="task-userName">
              {task.user.userName}
            </Comment.Author>
            <Comment.Text>{task.text}</Comment.Text>
          </Comment.Content>
        </Comment.Content>
      </Comment>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    const { allTask } = this.props.tasks;
    return (
      <div className="task-board">
        <Segment>
          <Header as="h1" dividing>
            Task Box
          </Header>
          <Comment.Group>
            <Segment className="task-scroll">
              {allTask.map((task, idx) => this.renderTasks(task, idx))}
            </Segment>
          </Comment.Group>
        </Segment>
        <Form
          className="message-posting"
          size="large"
          reply
          onSubmit={handleSubmit(this.onSubmit)}
        >
          {" "}
          <Segment stacked>
            <Field
              name="taskText"
              validate={required({ msg: "Please add a task" })}
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
  return { tasks: state.tasks };
}

export default compose(
  connect(mapStateToProps, { getAllTasks, postTask }),
  reduxForm({
    form: "CreateTask",
  })
)(TaskContainer);
