
import { Button } from "@mantine/core";
import { Link } from 'react-router-dom';


function MainForum() {
    
  return (
    <div className="m-2"> 
    forum page testing
    <Button<typeof Link>
    component={Link} to="register"
    variant="filled">
      Click to Sign Up
    </Button>
    </div>
  );
}

export default MainForum;
