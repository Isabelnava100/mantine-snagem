import { TodoState,Todo } from "./interfaces";

type BaseActions=
| {type:'addNew',payload:Todo}
| {type:'editExi',payload: {id:string}}

export const Reducer=
(state:TodoState, action:BaseActions):TodoState=>{



switch (action.type){
    case 'addNew':
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
    
    default:
        return state;
}
}