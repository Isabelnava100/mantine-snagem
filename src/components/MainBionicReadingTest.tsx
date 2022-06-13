
import { Container, Table, Text } from '@mantine/core';
import json from '../context/json.json';
import { useState } from 'react';
import BionicButton from './BionicButton';
import DOMPurify from "dompurify";

function basic(value:any){ 
let v= value.map((e: string)=>
    e.split(" ").map(x=> `<strong>${ x.substring(0, 3) }</strong>${ x.substring(3) }` ));

    return DOMPurify.sanitize(v,{ALLOWED_TAGS: ['b', 'strong'], ALLOWED_ATTR: ['style']});
    //`<b>${ x.substring(0, 3) }</b>${ x.substring(3) }`
    //.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue)
    //let clean = 
    
}



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
    /*
console.log(
    value.map((e: string)=>
    e.split(" ").map(x=> x.replace(/(\w+) (.*)/,"<b>$1</b> $2") )
    //e.replace(/(\w+) (.*)/,"<b>$1</b> $2") 
    )  
    
);*/
console.log(basic(value));

  return (
    <Container size="lg" style={{marginTop:10}}>
        <>
    <Table highlightOnHover>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
        </Table>
        {basic(value)}
       <BionicButton val={value} thestate={setVal}/>
       </>
        </Container>
  )
}

export default Forum

