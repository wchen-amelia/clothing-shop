import './cart-dropdown.styles.scss'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {Link, useNavigate} from "react-router-dom";

const CartDropdown=()=>{
    const{cartProducts}=useContext(CartContext);

    const  navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        navigate('/checkout');
    }
    
    
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                { cartProducts.map((product)=>(
                       <CartItem key={product.id} product={product}></CartItem> 
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>Check Out</Button>
        </div>
    );
}
export default CartDropdown