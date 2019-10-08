import React, { Component } from 'react';
import NavBar from './NavBar'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context'
import { checkPropTypes } from 'prop-types';
import PropTypes from 'prop-types'


// WE NEED TO MAKE THE PRODUCT COMPONENT ACCESIBLE TO ALL COMPONENTS: PRODUCT LIST, CART, DEALS OF THE DAY ..
// HENCE WE WILL  USE CONTEXT API WHERE WE HAVE ONE SOURCE OF TRUTH BUT ACCESSIBLE TO ALL COMPONENTS
export default class Product extends Component {
    render(){
        const{id, price, title, img, inCart} = this.props.product;
        return(
            <ProductWrapper className="com-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>
                        console.log('fehgfierh')
                    }> 
                    <Link to="/details">
                        <img src={img} alt="Product Image" className="card-img-top"></img>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false} onClick={()=>{console.log("INthecartt");}}>
                        {inCart?(
                            <p className="text-capitalize mb-0" disabled>
                                {""}
                                in inCart
                            </p>
                        ):(
                           <i className="fas fa-cart-plus"/>
                        )}

                    </button>
                    </div>

                    {/* CARd FOOTER */}
                <div className="card-footer d-flex justify-content-between">
                <p className="align-self-left mb-0"></p>  
                    <h5 className="text-black font-italic mb-0 ">
                       {/* PASSED AS A PROP */}
                       {title}
                       <span className="mr-1"></span>
                       {price}
                    </h5>  
                </div>    
                    
                </div>


            </ProductWrapper>
               
        );
    } 
}

Product.propType = {
    product: PropTypes.shape(
        {
            id: PropTypes.number,
            img: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.number,
            inCart:PropTypes.bool
        }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transistion: all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition: all 1s linear
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2) 

    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 1 s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding:0,2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0;
    transform: translate(100%,100%);   
}
.img-container: hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainBlue);
}
`;