import {useContext, Fragment} from "react";
import {ProductsContext} from "../../contexts/product.context";
import './categories-preview.styles.scss'
import CategoryPreview from "../category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {products} = useContext(ProductsContext);
    console.log(products);
    return (
        <div className='shop-container'>
            {
                Object.keys(products).map((category)=>
                    <CategoryPreview key={category} title={category} products={products[category]} />
                )
            }
        </div>

    );
}

export default CategoriesPreview