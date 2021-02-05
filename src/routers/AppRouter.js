import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ToDoScreen } from "../components/ToDo/ToDoScreen";
import { AuthRouter } from "./AuthRouter";

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
                        path="/auth" 
                        component={AuthRouter}
                    />
                </Switch>
            </div>
        </Router>
    )
}
