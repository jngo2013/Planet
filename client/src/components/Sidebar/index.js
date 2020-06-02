import React, { Component } from "react";
import "./sidebar.css";
import { connect } from "react-redux";
import { Segment, Header, Comment, Icon } from "semantic-ui-react";

class Sidebar extends Component {
  render() {
    return (
      <div className="attending-main-div">
        <Segment className="view-attending">
          <Header as="h3" dividing>
            Who's Going?
          </Header>
          <Comment.Group>
            {this.props.attending?.map((user, idx) => (
              <Segment className="sidebar-user" key={idx}>
                <Icon name="user plus" />
                {user.userName}
              </Segment>
            ))}
          </Comment.Group>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { attending: state.event.userSpecificEvent.attending };
}

export default connect(mapStateToProps)(Sidebar);
