import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';


export default class FirstPageSignUp extends Component {
    render(){
        return(    
            <div className="App">     
                <div className="App__Aside"></div>
                    <div className="App__Form">

                    <div className="PageSwitcher">
                            <NavLink to="/firstpages-signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                            <NavLink exact to="/firstpages-signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>   

                    <div className="FormTitle">
                            <NavLink to="/fisrtpages-signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>
                        <Route component={SignUpForm}>
                        </Route>
                    </div>  
            </div> 
        );

    } 
}