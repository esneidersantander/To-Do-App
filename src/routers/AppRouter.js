import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { login } from "../actions/auth";
import { ToDoScreen } from "../components/ToDo/ToDoScreen";
import {firebase} from '../firebase/firebase-config'
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";
import { Wait } from "../components/auth/Wait";
import { loadToDo } from "../helpers/loadToDo";
import { setTodos } from "../actions/todo";



export const AppRouter = () => {

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const dispatch = useDispatch();
    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user)=>{
            if (user?.uid) {
                dispatch(login (user.uid, user.displayName));
                setIsLoggedIn(true);
                const  todos = await loadToDo(user.uid);
                dispatch(setTodos(todos));
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [dispatch]);

    
    if (checking) {
        return(
            <Wait/>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute
                        isAuthenticated={isLoggedIn}    
                        exact
                        path="/"
                        component={ToDoScreen}
                    />
                    <PublicRoute 
                        isAuthenticated={isLoggedIn}
                        path="/auth" 
                        component={AuthRouter}
                    />
                </Switch>
            </div>
        </Router>
    )
}
