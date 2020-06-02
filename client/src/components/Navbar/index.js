import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import moment from "moment";
import './navbar.css'

const time = moment().format('LLLL');

export default (props) => (

  <Menu fixed='top' stackable inverted className='navi' widths={6}>
    { props.authenticated ? <Menu.Item content={time} /> : null   }
    { props.authenticated ? <Menu.Item as={Link} to='/createevent' content='Create Event'/> : null   }
    { props.authenticated ? <Menu.Item as={Link} to='/usertodos' content='My Events'/> : null   }
    { props.authenticated ? <Menu.Item as={Link} to='/profile' content='User Profile'/> : null   }
    { props.authenticated ? <Menu.Item as={Link} to='/joinEvent' content='Attend Event'/> : null   }
    { props.authenticated ?  <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
    { props.authenticated ? null : <Menu.Item as={Link} to='/signup' content='Sign Up'/> }
  </Menu>
);
