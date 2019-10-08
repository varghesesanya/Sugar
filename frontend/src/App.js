import React from 'react';
import {Switch} from 'react-router-dom'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import FirstPageSignIn from './pages/FistPagesSignIn'
import FirstPageSignUp from './pages/FirstPagesSignUp'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Dealsoftheday from './pages/DealsoftheDay';
import NavBar from './pages/NavBar';
import Details from './pages/Details';


function App() {

  return (
   <React.Fragment>
      <Switch>
        <Route exact path="/firstpages-signin" component={FirstPageSignIn}/>
        <Route exact path="/firstpages-signup" component={FirstPageSignUp}/>
        <Route exact path="/navbar" component={NavBar}/>
        <Route exact path="/dealsoftheday" component={Dealsoftheday}/>
        <Route exact path="/productlist" component={ProductList}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/details" component={Details}/>
      </Switch>   
   </React.Fragment>

  );
}

export default App;
