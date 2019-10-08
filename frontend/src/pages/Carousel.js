import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import ProductDataService from '../services/ProductDataService';

export default class Carousel_Deals extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            products: [],
            message: null
        }
    }
    
    componentDidMount(){
        this.refreshProductData();
    }
    
    refreshProductData(){
        ProductDataService.getTopProducts()
        .then(
            p_data => {
                console.log(p_data);
                this.setState({products: p_data.data})
            }
        )
    }


    render(){
        return(
            <Carousel>
                this.state.products.map(
                    product =>
                    <Carousel.Item onClick="redirectproductPage(${product.id})">
                        <img
                            className="d-block w-100"
                            src={product.img_url}
                            alt={product.product_name}/>
                        <Carousel.Caption>
                            <h3>{product.product_name}</h3>
                            <p>{product.product_desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>                    
                )
            </Carousel>

        );

    }

    redirectproductPage(pid){
        //TODO
    }
}