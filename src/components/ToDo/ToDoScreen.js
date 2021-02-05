import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { ToDoList } from './ToDoList'

export const ToDoScreen = () => {

    const dispatch = useDispatch();

    const handleLogout =()=>{
        dispatch(startLogout());
    }


    return (
        <div className="todo__main-content">
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
                />

                <ToDoList/>

            </div>
        </div>
    )
}
