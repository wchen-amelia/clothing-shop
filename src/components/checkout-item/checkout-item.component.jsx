
import './checkout-item.styles.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import './checkout-item.styles.scss'

const CheckoutItem=({product})=>{
    const{addCartProducts,reduceCartProducts,removeCartProducts}=useContext(CartContext);
    const {name,imageUrl,count,price}=product;
    
    const onAddHandler = ()=>{addCartProducts(product)}
    const onReduceHandler = ()=>{reduceCartProducts(product)}
    const onRemoveHandler = ()=>{removeCartProducts(product)}
    
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={onReduceHandler}>&#10094;</div>
                <span className='value'>{count}</span> 
                <div className='arrow' onClick={onAddHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={onRemoveHandler}>&#10005;</div>
        </div>
    );
}
export default CheckoutItem