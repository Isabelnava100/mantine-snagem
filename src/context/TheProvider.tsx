
import {PostsState,PostsA } from "./interfaces";
import { useReducer, useState } from "react";
import { Reducer } from "./reducer";

import { createContext } from 'react'

 const DataContext = createContext<PostsState | null>(null);


const initialState:PostsState= {
  tCount: 0,
  todos: [{
    id:1,
    title:'hi',
    body:'hii'
  }],
  completed: 0
}

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}



export const TheProvider = ({children}:ProviderProps) => {

    const [state, dispatch]= useReducer(Reducer, initialState);


  return (
    <DataContext.Provider value={state}>
    {children}
    </DataContext.Provider>

    
  )
}
