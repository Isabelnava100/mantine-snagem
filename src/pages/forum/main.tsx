
<<<<<<< HEAD
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
=======
import { Container, Table, Text } from '@mantine/core';


function Forum() {
    const ths = (
        <tr>
          <th>Element position</th>
          <th>Element name</th>
        </tr>
      );
    
    // const rows = elements.map((element) => (
    //     <tr key={element.name}>
    //       <td>{element.position}</td>
    //       <td>{element.name}</td>
    //       <td>{element.symbol}</td>
    //       <td>{element.mass}</td>
    //     </tr>
    //   ));
    const rows = ( <><tr>
        <td>Element position
            <Text color="dimmed" size="sm">
              Caption Position
            </Text></td>
        <td>Element name</td>
        </tr><tr>
        <td>Element name</td>
        <td>Element name</td>
      </tr></>);
    


  return (
    <Container size="lg" style={{marginTop:10}}>
        <>
    <Table highlightOnHover>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
        </Table>
       </>
        </Container>
  )
}

export default Forum

>>>>>>> 51f3370c42aa0ab8ca111bc1346514e272d89fcd
