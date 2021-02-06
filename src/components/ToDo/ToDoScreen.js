import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { ToDoList } from './ToDoList';

import {startAddNewToDo} from '../../actions/todo';

export const ToDoScreen = () => {

    const dispatch = useDispatch();

    const [formvalues, handleIputChange, reset] = useForm({title:''});
    const {title} = formvalues;

    
    const handleLogout =()=>{
        dispatch(startLogout());
    }
    const handleAddToDo =(e)=>{
        e.preventDefault();
        dispatch(startAddNewToDo(title));
        reset();
    }


    return (
        <form 
            className="todo__main-content"
            onSubmit={handleAddToDo}
        >
            <div className="todo__box-container">
                <div 
                    className="todo__main-logout pointer"
                    onClick={handleLogout}
                >
                    <i className="fas fa-power-off"></i>
                </div>
                <h1 className="todo__main-title">ToDo App</h1>

                <input 
                    className="mt-5 todo__input"
                    type="text"
                    name="title"
                    autoComplete="off"
                    value={title}
                    onChange={handleIputChange}
                />

                <ToDoList/>

            </div>
        </form>
    )
}
