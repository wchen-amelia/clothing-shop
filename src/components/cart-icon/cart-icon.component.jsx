import './cart-icon.styles.scss'
import {ReactComponent as CartIconImage} from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartIcon = ()=>{
    const {isOpen,setIsOpen} = useContext(CartContext);
    
    const clickHandler=()=>{
        setIsOpen(!isOpen);
    }
    
    return(
        <div className='cart-icon-container' onClick={clickHandler}>
            <CartIconImage className='shopping-icon'></CartIconImage>
            <span className='item-count'>0</span>
        </div>
    );
}
export default CartIcon