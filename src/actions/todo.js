import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startAddNewToDo= (title)=>{
    return async (dispatch, getState)=>{
        const {uid} = getState().auth;

        const newToDo ={
            title:title,
            done:false,
            date:new Date().getTime()
        }
        const doc = await db.collection(`${uid}/record/todos`).add(newToDo);
        dispatch(addNewNote(doc.id, newToDo))

    }
}

export const addNewNote=(id, todo)=>({
    type:types.toDoAddNew,
    payload:{
        id, ...todo
    }
})
export const setTodos=(todos)=>({
    type:types.toDoSetTodos,
    payload:todos
})