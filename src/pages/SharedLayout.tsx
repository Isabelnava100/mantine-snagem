import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation';


function SharedLayout() {
    return (
      <>
      <Navigation />
       <Outlet/>
      </>
    );
  }
  
  export default SharedLayout;
  