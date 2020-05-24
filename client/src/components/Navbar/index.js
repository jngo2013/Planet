import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './navbar.css'



export default (props) => (
  <Menu inverted className='navi' widths={5}>
    { props.authenticated ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }
    { props.authenticated ?  <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
    {/* <Menu.Item as={Link} to='/counter' content='Counter'/> */}
    { props.authenticated ? <Menu.Item as={Link} to='/usertodos' content='My Events'/> : null   }
    {/* <Menu.Item as={Link} to='/alltodos' content='See Todos'/> */}
    { props.authenticated ? <Menu.Item as={Link} to='/joinEvent' content='Attend Event'/> : null   }
    { props.authenticated ? <Menu.Item as={Link} to='/createevent' content='Create Event'/> : null   }

  </Menu>
);
