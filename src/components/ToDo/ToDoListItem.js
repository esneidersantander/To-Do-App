import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { startChangeStateToDo } from '../../actions/todo';

export const ToDoListItem = ({id, title, done, date}) => {

    let donex = done;
    const dispatch = useDispatch();
    
    const handleChangeState = () =>{
        if (donex) {
            donex = false; 
        }else {
            donex = true; 
        }

        dispatch(startChangeStateToDo({
            id:id,
            title:title,
            done:donex,
            date:date
        }));
    }


    return (
        <li 
            className="todo__list-item mt-5"
        >
            <div 
                onClick={handleChangeState}
                className={`todo-list-item-text ${done && 'complete'}`}
            >
                <h5>{title}</h5>
            </div>
            <div className="todo-list-item-icons">
                <i className="fa fa-pen "></i>
                    &nbsp;
                <i className="fa fa-trash"></i>
            </div>
        </li>
        )
}
