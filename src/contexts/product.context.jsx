import{createContext,useState,useEffect} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils"

export const ProductsContext = createContext({
    products:{}
})

export const ProductsProvider = ({children})=>{
    const [products,setProducts] = useState({});
    const value = {products};
    
    useEffect(()=>{
        const fun=async()=>{
            setProducts(await getCategoriesAndDocuments());
        }
        fun();
    },[]);

    
    return <ProductsContext.Provider value = {value}>{children}</ProductsContext.Provider>
}