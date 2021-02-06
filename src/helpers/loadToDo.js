import { db } from "../firebase/firebase-config";

export const loadToDo =async (uid)=>{

    const todosSnap = await db.collection(`${uid}/record/todos`).get();
    const todos=[];

    todosSnap.forEach(snapHijo=>{
        todos.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    return todos;
}