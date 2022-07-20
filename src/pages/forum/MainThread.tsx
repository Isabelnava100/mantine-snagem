
import { useEffect, useState } from 'react';
import { Container, Pagination, LoadingOverlay, Button } from '@mantine/core';
import threadJSON from '../../context/temporary/oneThread.json';
import { ArticleCardVertical } from './components/EachPost';
import { useParams } from 'react-router-dom';
import { FeaturesTitle } from './components/setTitleperThread';
const mewLoad=require('../../assets/icons/mewdumpy.gif');
const searchIcon=require('../../assets/icons/searchIcon.png');


function Threads() {
  const { id } = useParams();
  const [visible, setVisible] = useState<boolean>(true);
  const [postsFromThread, setPosts] = useState<object>(threadJSON);

  const totalItemsCount=Object.keys(threadJSON).length;
  const postPerPage=6;
  const pagesCount=Math.ceil(totalItemsCount / postPerPage);

  const [page, onChange] = useState<number>(1); //if last then pages = pagesCount
  const start=(page - 1) * postPerPage;
  const end=Math.min(page * postPerPage, totalItemsCount);

useEffect(() => {
  if(visible){
  setVisible(false);
  setPosts(threadJSON);
  }else {
//console.log(threadJSON);
  }
}, [id, page]); //set to page

  return (
      
    <Container size="lg" style={{marginTop:20,paddingBottom:100}}>
        <div id="loadingContainer">
        <LoadingOverlay visible={visible} loader={<img src={mewLoad} alt="mew loading" style={{position:'fixed',top:'25%'}} />} />
        {  !visible&&
        <>
        <FeaturesTitle />
          <Pagination total={pagesCount} color="violet" withEdges page={page} onChange={onChange}  
          style={{alignSelf: 'end'}} />
          {postsFromThread&&
          Object.values(postsFromThread).map((post,index)=>
          index>=start&&index<=end&&
          <ArticleCardVertical key={post.thread_id}
          image={searchIcon} category={post.thread_post} title={''} date={'date'} author={{
            name: 'name',
            avatar: 'avie'
          }}/>
          )}
          <Pagination total={pagesCount} color="violet" withEdges page={page} onChange={onChange} 
          style={{alignSelf: 'end'}} />
           <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'grape', to: 'violet' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Make a New Post
          </Button>
          </>
        }

      </div>
        </Container>
   
  )
}

export default Threads;