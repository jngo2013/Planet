import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default (props) => (
  <Menu widths={3}>
    { props.authenticated ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }
    { props.authenticated ?  <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
    {/*<Menu.Item as={Link} to='/counter' content='Counter'/>*/}
    { props.authenticated ? <Menu.Item as={Link} to='/usertodos' content='My Events'/> : null   }
    <Menu.Item as={Link} to='/alltodos' content='See all events'/>
  </Menu>
);
