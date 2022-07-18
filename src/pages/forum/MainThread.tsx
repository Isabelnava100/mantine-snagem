
import { Container, Pagination, Table, Text } from '@mantine/core';

import { useEffect, useState } from 'react';
import { LoadingOverlay, Button, Group } from '@mantine/core';
import threadJSON from '../../context/temporary/oneThread.json';
import { ArticleCardVertical } from './components/EachPost';
import { useParams } from 'react-router-dom';
const mewLoad=require('../../assets/icons/mewdumpy.gif');
const searchIcon=require('../../assets/icons/searchIcon.png');


function Threads() {
  const { id } = useParams();
  const [visible, setVisible] = useState<boolean>(true);
  const [page, onChange] = useState<number>(1);
  const [postsFromThread, setPosts] = useState<object>(threadJSON);
  const total=10;
  const postPerPage=1;

useEffect(() => {
  if(visible){
  setVisible(false);
  setPosts(threadJSON);
  }else {
console.log(page);
  }
}, [id,page]); //set to page

      
  return (
      
    <Container size="lg" style={{marginTop:20}}>
        <div style={{ position: 'relative',display:'flex',minHeight:300,flexDirection:'column' }}>
        <LoadingOverlay visible={visible} loader={<img src={mewLoad} alt="mew loading" />} />
        {  visible?null:
        <>
          <Pagination total={total} color="violet" withEdges page={page} onChange={onChange}   />
          </>
        }
        
      
          <br/>
          {/* <ArticleCardVertical image={searchIcon} category={'cat'} title={'title'} date={'date'} author={{
          name: 'name',
          avatar: 'avie'
        }}/> */}

      </div>
        </Container>
   
  )
}

export default Threads;