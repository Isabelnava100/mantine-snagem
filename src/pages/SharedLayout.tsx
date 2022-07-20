import { Outlet } from 'react-router-dom';
import Navigation from './navigation';
import { useWindowScroll } from '@mantine/hooks';
import { Button } from '@mantine/core';
const upArrow=require('../assets/icons/up-arrow.png');

function SharedLayout() {
  const [scroll, scrollTo] = useWindowScroll();
    return (
      <>
      <Navigation  />
       <Outlet/>
       <Button onClick={() => scrollTo({ y: 0 })} id="backtotop">
        <img src={upArrow} width="16" height="16" /></Button>
      </>
    );
  }
  
  export default SharedLayout;
  