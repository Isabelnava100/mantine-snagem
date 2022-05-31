
import {  Link, NavLink } from 'react-router-dom';
import { Burger, Group } from '@mantine/core';
import { useState } from 'react';


const Navigation = () => {
 
  const loginName = (sessionStorage.length ? 'Profile' : 'Login');
  
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  let [ firstCheckbox, setFirstCheckbox ]   = useState(false); // true - first check box defaults to checked.
  

  const handleMenu = () => {
    setOpened((o) => !o);
    setFirstCheckbox((o) => !o);

  };
  
      return (        
        <nav className="flex items-center justify-between flex-wrap py-4 px-7 bg-purple-800">
        <div className="flex items-center flex-shrink-0 mr-6 lg:ml-10">
          <h1 className="text-lg m-0 uppercase font-bold underline-offset-2 hover:underline">
           <Link to="/" style={{color:'white'}}>
            SNAGEM<span className="font-extralight"> HEADQUARTERS</span>
            </Link>
          </h1>
        </div>

        <label
          className="hamburger-icon"
          aria-label="navigation menu"
          htmlFor="menu-toggle"
        >
           <Burger
      opened={opened}
      onClick={handleMenu}
      title={title}
      className="cursor-pointer z-20 relative block lg:hidden"
    />
        </label>

        <input type="checkbox" id="menu-toggle" checked={firstCheckbox} readOnly />
        <Group mt={60}
          className="mobileNAV"
          id="navbar"
        >
          <div className="lg:flex-grow  lg:text-right">
            <NavLink to="/marketplace" 
            className='nav-links border-t-2 ' 
            >
              Marketplace
            </NavLink>
            <NavLink to="/activities" 
            className='nav-links ' 
            >
              Activities
            </NavLink>
            <NavLink to="/forum" 
            className='nav-links' 
            >
              Forum
            </NavLink>
            <NavLink to="/users"
            className='nav-links' 
            >
              Users
            </NavLink>
            <NavLink to={"/"+loginName}
            className='nav-links' 
            >
              {loginName}
            </NavLink>
          </div>
        </Group>
      </nav>
      )
  }
  
  export default Navigation;