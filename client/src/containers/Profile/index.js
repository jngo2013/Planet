import React, { Component } from 'react';
import './profile.css';
import {compose} from "redux";
import {reduxForm, Field} from 'redux-form';
import axios from "axios";
import { connect } from 'react-redux';
import { length, required} from 'redux-form-validators';
import requireAuth from './../../hoc/requireAuth';
import ProfileComponent from "../../components/ProfileComponent";
import {getUserName} from "../../actions/profile";


class Profile extends Component {
  async componentDidMount() {

  try {
   await this.props.getUserName()

  } catch (e) {

  }
}

  render() {
    return (
<ProfileComponent
   profileInfo={this.props.getInfo}
  />
    );
  }
}

function mapStateToProps(state) {
  return { getInfo: state.user.getUserName }
}

const composedComponent = compose(
  reduxForm({ form: 'Profile'}),
  connect(mapStateToProps, { getUserName })
)(Profile)

export default requireAuth(composedComponent);