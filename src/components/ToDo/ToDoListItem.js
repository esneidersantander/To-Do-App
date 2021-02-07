import React from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startDeleting, startUpdateToDo } from '../../actions/todo';

export const ToDoListItem = ({id, title, done, date}) => {

    let donex = done;
    const dispatch = useDispatch();
    
    const handleChangeState = () =>{
        if (donex) {
            donex = false; 
        }else {
            donex = true; 
        }

        dispatch(startUpdateToDo({
            id:id,
            title:title,
            done:donex,
            date:date
        }));
    }

    const handleEdit = () =>{
        Swal.fire({
            title: 'Update your todo',
            input: 'text',
            inputValue:title,
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Update',
            showLoaderOnConfirm: true,
            preConfirm: (todo) => {
                if (todo.length < 2) {
                    Swal.showValidationMessage(
                        `You can't send an empty field`
                      )
                }
              },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
                if (result.isConfirmed) {
                    
                    dispatch(startUpdateToDo({
                        id:id,
                        title:result.value,
                        done:donex,
                        date:date
                    }));
                    Swal.fire('Updated!', '', 'success')
                } 
          })
    }



    const handleDelete =() => {
        Swal.fire({
            title: 'Do you want to delete this todo',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeleting(id));
                Swal.fire('Deleted!', '', 'info')
            } 
        })
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
                <i
                    onClick={handleEdit}  
                    className="fa fa-pen"
                ></i>
                    &nbsp;&nbsp;
                <i
                    onClick={handleDelete} 
                    className="fa fa-trash pointer"
                ></i>
            </div>
        </li>
        )
}
