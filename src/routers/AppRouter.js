import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { ToDoScreen } from "../components/ToDo/ToDoScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ToDoScreen}
                    />
                    <Route 
                        path="/auth/login"
                        component={LoginScreen}
                    />
                    <Route 
                        path="/auth/register"
                        component={RegisterScreen}
                    />
                </Switch>
            </div>
        </Router>
    )
}
