import { PostsState,PostsA } from "./interfaces";

type BaseActions=
| {type:'addNew',payload:PostsA}
| {type:'editExi',payload: {id:string}}

export const Reducer=
(state:PostsState, action:BaseActions):PostsState=>{



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