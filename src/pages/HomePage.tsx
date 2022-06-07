
import { Button } from "@mantine/core";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { TodoContext } from "../context/Context";

function Homepage() {
  const {todoState} = useContext(TodoContext);
  console.log(todoState);
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
