import './category.styles.scss'
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const {title} = useParams();
    console.log(title);
    const {products} = useContext(ProductsContext);
    const [categoryProducts, setCategoryProducts] = useState(null);

    useEffect(() => {
        setCategoryProducts(products[title]);
    }, [title, products]);

    return (
        <>
            <h2 className='category-title'>{title.toUpperCase()}</h2>
            <div className='category-container'>

                {categoryProducts && categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>
    );
}

export default Category