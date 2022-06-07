
import { useReducer } from "react";
import { Reducer } from "./reducer";
import { TodoContext } from "./Context";
import { INITIAL_STATE } from "./int";





interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}



export const Provider = ({children}:ProviderProps) => {

    const [todoState, dispatch]= useReducer(Reducer, INITIAL_STATE);
  

  return (
    <TodoContext.Provider value={{todoState}}>
    {children}
    </TodoContext.Provider>

    
  )
}
