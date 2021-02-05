import React from 'react'

export const ToDoList = () => {
    return (
        <ul className="todo__list-main">
            <li 
                className="todo__list-item mt-5"
            >
                <div className="todo-list-item-text">
                    <h5>Salir a comer</h5>
                </div>
                <div className="todo-list-item-icons">
                    <i className="fa fa-pen"></i>
                        &nbsp;
                    <i className="fa fa-trash"></i>
                </div>
            </li>
            <li 
                className="todo__list-item mt-5"
            >
                <div className="todo-list-item-text">
                    <h5>Hacer deberes</h5>
                </div>
                <div className="todo-list-item-icons">
                    <i className="fa fa-pen "></i>
                        &nbsp;
                    <i className="fa fa-trash"></i>
                </div>
            </li>
        </ul>
    )
}
