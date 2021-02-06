import { types } from "../types/types";

const initialState={
    todos:[]
}

export const toDoReducer = (state=initialState, action)=>{


    switch (action.type) {
        case types.toDoAddNew:
            return {
                ...state,
                todos:[action.payload, ...state.todos]
            }
        case types.toDoDelete:
            return{
                ...state,
                todos: state.todos.filter(todo=>todo.id !== action.payload)
            }
        case types.toDoLogoutCleaning:
            return{
                ...state,
                todos:[]
            }
        case types.toDoSetTodos:
            return {
                ...state,
                todos:[...action.payload]
            }
        case types.toDoRefresh:
            console.log(action.payload.id);
            console.log(action.payload.toDo);
            return {
                ...state,
                todos:state.todos.map(
                    toDo=>toDo.id === action.payload.id
                        ?action.payload.toDo
                        :toDo
                )
            }

        default:
            return state;
    }
}