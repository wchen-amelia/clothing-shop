import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import {Route,Routes} from "react-router-dom";
import Category from '../category/category.component'

const Shop=()=>{
    return(
        <Routes>
            <Route path='/' element={<CategoriesPreview />} />
            <Route path=':title' element={<Category />}/>
        </Routes>
    );
}

export default Shop