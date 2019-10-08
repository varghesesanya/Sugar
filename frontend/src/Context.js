import React , {Component} from 'react'
import {storeProducts, detailedProduct} from './Data';

// WE NEED TO MAKE THE PRODUCT COMPONENT ACCESIBLE TO ALL COMPONENTS: PRODUCT LIST, CART, DEALS OF THE DAY ..
// HENCE WE WILL  USE CONTEXT API WHERE WE HAVE ONE SOURCE OF TRUTH BUT ACCESSIBLE TO ALL COMPONENTS
// FOR MULTIPLE EXPORTS

// CREATING NEW CONTEXT OBJECTS

const ProductContext = React.createContext();

// THE CONTEXT HAS TWO PARTS THE PROVIDER NAD THE CONSUMER

class ProductProvider extends Component {

    state = {
        products:[],
        detailProduct:detailedProduct
    };

    // TO MAKE SURE IF VALUE IS CHANGED IN ONE PLACE IT IS ALSO CHANGED IN OTHE RPLACES;; MOST PROBABLY WONT NEED IT BECAUUUSE DB SAMBHAAAL LEGA

    componentDidMount(){
        this.setProducts();

    }

    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{

            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]            
        });
        this.setState(()=>{
            return{products: tempProducts};
        })
    }
    //////////////////////////////////////////////////////////////
    handleDetail = () =>{


            console.log("HELLO FROM DETAIL. YOUR PRODUCT IS BEING HANDLED");

    }


    addToCart = (id) =>{
        
            console.log("PRODUCT ADDED TO CART");

    }
    render(){
        return(
            <ProductContext.Provider value={{

            ...this.state, 
            handleDetail:this.handleDetail,
            handleDetail:this.handleDetail,                
            }
            }>
                {this.props.children}
                {/* SINCE PRODUCT   PROVIDER WILL BE SITTING AT TOP OF ALL WE NEED TO RETURN INTS CHILDREN */}
            </ProductContext.Provider>
        );

    } 
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };