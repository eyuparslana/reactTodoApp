import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/navbar";
import SignInForm from "./components/signin";
import {BrowserRouter as Route, Switch} from "react-router-dom";
import SignUpForm from "./components/signup";
import Home from "./components/homepage";

export const apiUrl = "http://localhost:8000";

class App extends Component {


    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <SignInForm/>
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUpForm/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;