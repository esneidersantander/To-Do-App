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
export const startChangeStateToDo= (todo)=>{
    return async (dispatch, getState)=>{
        const {uid} = getState().auth;
        const toDoToFireStore = {...todo};
        delete toDoToFireStore.id;

        await db.doc(`${uid}/record/todos/${todo.id}`).update(toDoToFireStore);
        
        dispatch(refreshTodo(todo.id, toDoToFireStore))
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
export const refreshTodo=(id, toDo)=>({    
    type:types.toDoRefresh,
    payload:{id,
        toDo: {
            id,
            ...toDo}
    }
})

export const todoLogout = ()=>({
    type: types.toDoLogoutCleaning
})