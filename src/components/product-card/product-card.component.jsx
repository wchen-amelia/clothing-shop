import './product-card.styles.scss'
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const ProductCard=({product})=>{
    const {name,price,imageUrl} = product;
    const {addCartProducts}=useContext(CartContext);
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}></img>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={()=>{addCartProducts(product)}}>Add to Cart</Button>
        </div>
    );
}

export default ProductCard