import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {ToDoListItem} from './ToDoListItem';

export const ToDoList = () => {
    const {todos} = useSelector(state => state.todos);


    return (
        <ul className="todo__list-main">
            {
                todos.map(todo=>(
                    <ToDoListItem
                        key={todo.id}
                        {...todo}
                    />
                ))
            }

        </ul>
    )
}
