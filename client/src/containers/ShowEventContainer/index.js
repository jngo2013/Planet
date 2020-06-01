// 053120 GCM - I don't think this is being used anywhere so we can probably delete this.

// // This container should render all of the events.
// // This container will render when a user clicks on the 'See All Events' button.

// import React, { Component } from 'react';
// import { List, Header, Container } from 'semantic-ui-react';
// import moment from 'moment';
// import { connect } from 'react-redux';
// import { getAllTodos } from '../../actions/allTodos';
// import ShowEvent from './../../components/ShowEvent';

// // SOME NEXT STEPS FOR THIS CONTAINER:
// // 1.  The 'renderTodoList' function should be something like 'renderEventsList'.
// // 2.  Any mention of 'todos' should be 'events' or something similar.
// // 3.  See if we actually need the ShowEvent component here.  We're actually mapping through an events array and returning an item for every event.
// // 4.  Currently this is connected to the Add Todos form (which will become the Add Events Form)
// // 5.  Pass in props to <ShowEvent /> for the user's name
// // 6.  in the getAllTodos function, the GET request should hit '/api/events'
// // 7.  change the dispatch type to 'GET_ALL_EVENTS'
// // 8.  create a function in the eventController to find all events from the database


// class ShowEventContainer extends Component {

//   componentDidMount() {
//     this.props.getAllTodos();
//   }


//   renderTodoList = () => {
//     if (this.props.todos.length === 0) {
//       return <Header content='No todos yet' />
//     } else {
//       return this.props.todos.map(({ _id, text, dateCreated }) => { // <----- add data from create event form here; put it in a variable so it's cleaner
//         return (
//           // SAVE FOR REFERENCE!  MAY NEED THIS
//           // <List.Item key={_id}>
//           //   <List.Content>
//           //     <List.Header><h1>{text}</h1></List.Header>
//           //     <List.Description>Created: {moment(dateCreated).fromNow()}</List.Description>
//           //     <List.Description><p>THE LOCATION WILL GO HERE</p></List.Description>
//           //     <List.Description><p>THE EVENT LOCATION WILL GO HERE</p></List.Description>
//           //     <List.Description><p>ANY OTHER INFO CAN GO HERE</p></List.Description>
//           //   </List.Content>
//           // </List.Item>

//           <div>
//             <Container fluid textAlign='left'>
//               <Header as='h2' textAlign='left'>EVENT NAME WILL GO HERE</Header>
//               <p>
//                 Created: {moment(dateCreated).fromNow()}  DATE OF EVENT WILL GO HERE
//               </p>
//               <p>
//                 LOCATION WILL GO HERE
//               </p>
//               <p>
//                 DESCRIPTION OF THE EVENT WILL GO HERE:
//                 The dogs' value to early human hunter-gatherers led to them quickly
//                 becoming ubiquitous across world cultures. Dogs perform many roles for
//                 people, such as hunting, herding, pulling loads, protection, assisting
//                 police and military, companionship, and, more recently, aiding
//                 handicapped individuals. This impact on human society has given them the
//                 nickname "man's best friend" in the Western world. In some cultures,
//                 however, dogs are also a source of meat.
//               </p>
//               <br/>
//             </Container>
//           </div>
//         )
//       })
//     }
//   }

//   render() {
//     return (
//       <div>
//         <ShowEvent />
//         <List>
//           {this.renderTodoList()}
//         </List>
//       </div>

//     );
//   }
// }


// function mapStateToProps({ todos: { todos, getAllTodosError } }) {
//   return { todos, getAllTodosError };
// }



// export default connect(mapStateToProps, { getAllTodos })(ShowEventContainer);

