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
        case types.toDoSetTodos:
            return {
                ...state,
                todos:[...action.payload]
            }

        default:
            return state;
    }
}