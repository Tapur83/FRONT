import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu fixed="top">
     
        <Button primary>Home</Button>
        <Button primary>About</Button>
        <Button primary>Contact</Button>
        <Menu.Menu position="right">
          
            <Input icon="search" placeholder="Search..." style={{ backgroundColor: 'blue' }}/>
  
          <Button primary>Post</Button>
          <Button primary>Login</Button>
        </Menu.Menu>
     
    </Menu>
  );
};

export default Header;