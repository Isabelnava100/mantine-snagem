
import { Container, Table, Text } from '@mantine/core';
import { useForumLink } from './components/MiniNavForum';
import { useEffect, useState } from 'react';
import { LoadingOverlay, Button, Group } from '@mantine/core';
import forumJSON from '../../context/temporary/threadsInForum.json';
import { Link } from 'react-router-dom';
import { HeroText } from './components/HeroSection';
const mewLoad=require('../../assets/icons/mewdumpy.gif');


function MainForum() {
  const forumPlace  = useForumLink();
  const place=forumPlace?.active;
  const [visible, setVisible] = useState(true);
    
  console.log(place);
  
useEffect(() => {
  setVisible(true);

  setTimeout(()=>{
   setVisible(false);
  }, 1000)

}, [place]);

    const ths = (
        <tr>
          <th>TOPICS</th>
          <th>LAST POST</th>
        </tr>
      );
    
    const rows = forumJSON.map((thread) => (
        <tr key={thread.topics_id}>
          <td><Link style={{textDecoration: 'none'}} to={`/forum/thread/${thread.topics_id}`}>{thread.topic_title} <Text color="dimmed" size="sm">
             {thread?.topic_description}
            </Text></Link></td> 
          <td><Link style={{textDecoration: 'none'}} to={`lastpost${thread?.last_thread_id}`}>{thread?.lastpostTime}</Link></td>
        </tr>
      ));
      
  return (
      
    <Container size="lg" style={{marginTop:20,paddingBottom:100}}>
        <div style={{ position: 'relative',display:'flex',flexDirection:'column' }}>
        <LoadingOverlay visible={visible} loader={<img src={mewLoad} alt="mew loading" />} />
        <HeroText/>
   
        <Table highlightOnHover>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
        </Table>

      </div>
        </Container>
   
  )
}

export default MainForum;