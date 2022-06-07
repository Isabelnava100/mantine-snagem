import { Container, Table, Text } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import BionicButton from '../../components/BionicButton';

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
    <Table highlightOnHover>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
        </Table>
        <BionicButton/>
        </Container>
  )
}

export default Forum