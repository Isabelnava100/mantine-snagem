
  
// import api from '../api/posts';
// import { AxiosError } from 'axios';
import { createContext, useEffect, useState } from 'react'
import { PostsA } from './interfaces';


export const DataContext = createContext<PostsA | null>(null);

console.log('loaded');



// export const DataProvider= ({children:any}) => {
//   return (
//     <DataContext.Provider value={{

//     }}>
//     {children}
//     </DataContext.Provider>
//   )
// }





//   const [posts,setPosts]=useState<PostsA[]>([]);

// useEffect(()=> {
// const fetchPosts= async () => {
//   try {
//     await api.get<PostsA[]>('/posts') 
//     .then(response => {
//       console.log(response.data);
//       setPosts( response.data );
//   });
//   }catch (err: any | AxiosError){
    
//     err.response ? 
//     console.log(err.response.data)
//      : 
//     console.log(err.message);
//   }
// }

// fetchPosts();
// },[])
