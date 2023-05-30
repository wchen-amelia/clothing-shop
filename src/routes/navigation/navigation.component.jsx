import {Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {UserContext} from "../../contexts/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {CartContext} from "../../contexts/cart.context";

import './navigation.styles.scss';

const Navigation = () => {
    const {userState} = useContext(UserContext);
    const {isOpen} = useContext(CartContext);
    
    const signOutHandler= async ()=>{
        await signOutUser();
    }
    

    
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {userState ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ):(
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                         </Link>
                    )}
                    <CartIcon></CartIcon>
                </div>
                {isOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
