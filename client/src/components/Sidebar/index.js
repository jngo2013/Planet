import React, { Component } from "react";
import './sidebar.css';
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {getUserName} from "../../actions/profile";
import requireAuth from "../../hoc/requireAuth";
import { Segment, Header, Comment } from 'semantic-ui-react';


class Sidebar extends Component {
  render () {
    return (
      <div>
        {/* <div className="sidebar">
          { this.props.attending?.map((user, idx) => <p key={idx}>{user.userName}</p>)}
        </div> */}

        <Segment className='view-attending'>
          <Header as='h3' dividing>
            Who's Going?
          </Header>
          <Comment.Group>
            { this.props.attending?.map((user, idx) => <p key={idx}>{user.userName}</p>)}
          </Comment.Group>
        </Segment>

      </div>
    )
  }
}





function mapStateToProps(state) {
  return { attending: state.event.userSpecificEvent.attending }
}



export default connect(mapStateToProps)(Sidebar);
