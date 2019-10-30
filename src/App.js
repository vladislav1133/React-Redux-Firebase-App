import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from "./components/projects/CreateProject";
import {connect} from "react-redux";

const App = (props) => {
    const { auth } = props;

    if(auth.isLoaded) {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/project/:id' component={ProjectDetails}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        <Route path='/create' component={CreateProject}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }

};


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};
export default connect(mapStateToProps)(App);