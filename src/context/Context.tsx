import { createContext } from 'react'
import { TodoState } from './interfaces';

export type TodoContextProps= 
{
    todoState:TodoState
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

