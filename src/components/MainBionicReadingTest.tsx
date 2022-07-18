
import { Container, Table, Text } from '@mantine/core';
import json from '../context/json.json';
import { useState } from 'react';
import BionicButton from './BionicButton';



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
    

    //const [value, toggle] = useToggle('blue', ['blue', 'orange']);
    
    const [value, setVal] = useState(json.widget.window);

    

  return (
    <Container size="lg" style={{marginTop:10}}>
        <>
    <Table highlightOnHover>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
        </Table>
        
       <BionicButton val={value} thestate={setVal}/>
       </>
        </Container>
  )
}

export default Forum

