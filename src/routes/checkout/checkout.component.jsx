﻿
import{useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss'

const CheckOut = ()=>{
    const { cartProducts,total} = useContext(CartContext);
    
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartProducts.map((product)=>
                <CheckoutItem key={product.id} product={product}></CheckoutItem>
            )} 
            <span className='total'>Total: {total}$</span>
        </div>
    );
}

export default CheckOut