import React from 'react'

export const ToDoListItem = (todo) => {
    console.log(todo);
    return (
        <li 
            className="todo__list-item mt-5"
        >
            <div 
                className={`todo-list-item-text ${todo.done && 'complete'}`}

            >
                <h5>{todo.title}</h5>
            </div>
            <div className="todo-list-item-icons">
                <i className="fa fa-pen "></i>
                    &nbsp;
                <i className="fa fa-trash"></i>
            </div>
        </li>
        )
}
