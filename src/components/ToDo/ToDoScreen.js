import React from 'react'

export const ToDoScreen = () => {
    return (
        <div className="todo__main-content">
            <div className="todo__box-container">
                <h1 className="todo__main-title">ToDo App</h1>

                <input 
                className="mt-5 todo__input"
                    type="text"
                />

                <ul className="todo__list-main">
                    <li 
                        className="todo__list-item mt-5"
                    >
                        <div className="todo-list-item-text">
                            <h5>Salir a comer</h5>
{/*                             asdads asdasdas asdad sasda sdasasd adsasdas dasasda dsasdasd asasdadsasdasda sasdadsasasdads asdasdas asdad sasda sdasasd adsasdas dasasda dsasdasd asasdadsasdasda sasdadsas dasdas */}
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
{/*                             asdads asdasdas asdad sasda sdasasd adsasdas dasasda dsasdasd asasdadsasdasda sasdadsasasdads asdasdas asdad sasda sdasasd adsasdas dasasda dsasdasd asasdadsasdasda sasdadsas dasdas */}
                        </div>
                        <div className="todo-list-item-icons">
                            <i className="fa fa-pen "></i>
                                &nbsp;
                            <i className="fa fa-trash"></i>
                        </div>
                    </li>
                    <li 
                        className="todo__list-item mt-5"
                    >
                        <div className="todo-list-item-text">
                            <h5>Cantar una cancion</h5>
{/*                             asdads asdasdas asdad sasda sdasasd adsasdas dasasda dsasdasd asasdadsasdasda sasdadsasasdads asdasdas asdad sasda sdasasd adsasdas dasasda dsasdasd asasdadsasdasda sasdadsas dasdas */}
                        </div>
                        <div className="todo-list-item-icons">
                            <i className="fa fa-pen "></i>
                                &nbsp;
                            <i className="fa fa-trash"></i>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}
