import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Carousel_Deals from './Carousel';
import Title from './Title';
export default class DealsoftheDay extends Component {
    render(){
        return(
            <>
            <NavBar/>
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                 <Title name="Deals Of The" title="Day"/>   
                    <div className="row">
                        <Carousel_Deals/>
                    </div>    
                </div>
            </div>
            </React.Fragment>
            </>
        );

    } 
}