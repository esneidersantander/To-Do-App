import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { startChangeStateToDo, startDeleting } from '../../actions/todo';

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


    const handleDelete =() => {
        dispatch(startDeleting(id));
    }

    return (
        <li 
            className="todo__list-item mt-5"
        >
            <div 
                onClick={handleChangeState}
                className={`todo-list-item-text pointer ${done && 'complete'}`}
            >
                <h5>{title}</h5>
            </div>
            <div className="todo-list-item-icons">
{/*                 <i className="fa fa-pen "></i>
                    &nbsp; */}
                <i
                    onClick={handleDelete} 
                    className="fa fa-trash pointer"
                ></i>
            </div>
        </li>
        )
}
