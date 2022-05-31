
import { Button } from "@mantine/core";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="m-2">    
    <Button<typeof Link>
    component={Link} to="register"
    variant="filled">
      Click to Sign Up
    </Button>
    </div>
  );
}

export default Homepage;
