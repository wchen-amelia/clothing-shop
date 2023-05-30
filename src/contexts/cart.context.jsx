import {createContext, useState} from "react";


export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {
    },
    cartProducts: [],
    addCartProducts: () => {
    },
    reduceCartProducts: () => {
    },
    count: 0,
    removeCartProducts: () => {
    },
    total:0,
})



export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [total,setTotal]=useState(0);
    const addCartProducts = (productToAdd) => {
        const productFound = cartProducts.find((product) => productToAdd.id === product.id);
        if (productFound) {
            setCartProducts(cartProducts.map((product) => {
                return productToAdd.id === product.id ?
                    {...product, count: product.count + 1} :
                    product
            }));
        } else {
            setCartProducts([...cartProducts, {...productToAdd, count: 1}]);
        }
        setCount(count + 1);
        setTotal(total+productToAdd.price);
    };
    
    const reduceCartProducts = (productToReduce) => {
        const productFound = cartProducts.find((product) => productToReduce.id === product.id);
        if (productFound) {
            setCount(count - 1);
            if (productFound.count === 1) {
                setCartProducts(cartProducts.filter((product) => {
                    return productToReduce.id !== product.id;
                }));
            } else {
                setCartProducts(cartProducts.map((product) => {
                    return productToReduce.id === product.id ?
                        {...product, count: product.count - 1} : product;
                }));
            }
            setTotal(total-productToReduce.price);
        }
    };

    const removeCartProducts = (productToRemove) => {
        const productFound = cartProducts.find((product) => productToRemove.id === product.id);
        if (productFound) {
            setCount(count - productFound.count);
            setTotal(total-productFound.count*productFound.price);
            setCartProducts(cartProducts.filter((product) => {
                return productToRemove.id !== product.id;
            }));
        }
    }

    const value = {
        isOpen, 
        setIsOpen, 
        cartProducts, 
        addCartProducts, 
        count,
        reduceCartProducts,
        removeCartProducts,
        total
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}