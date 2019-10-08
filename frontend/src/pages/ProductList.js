import React, { Component } from 'react';
import {ProductConsumer} from '../Context'
import NavBar from './NavBar';
import Title from './Title';
import Product from './Product';

// state ={
// products:[]

// }s

export default class ProductList extends Component {
    render(){
        return(
            <>
            <NavBar/>
            <React.Fragment>
            <div className="py-5">
                <div className="container">
                 <Title name="Deals Of The" title="Day"/>   
                    <div className="row">
                    <ProductConsumer>

                        {/* THE VALUE IS AN OBJECT */}
                        {value=> {
                            // CONSUMER TAKE SIN THE VALUE PROVIDED BY THE PROVIDER
                            // VALLUE PRESENT IN VALUE PROP
                            return value.products.map(product =>{
                                return <Product key={product.id} product={product} />;

                            });
                        }}
                    </ProductConsumer>
                    </div>    
                </div>
            </div>
            </React.Fragment>
            </>
        );

    } 
}
