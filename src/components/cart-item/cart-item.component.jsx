import './cart-item.styles.scss'

const CartItem=({product})=>{
    const {id,name,price,imageUrl,count}=product;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <span className="name">{name}</span>
                <span className='price'>{count} x ${price}</span>
            </div>
            
        </div>
    );
}

export default CartItem