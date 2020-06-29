import React from 'react';
import CartItem from './CartItem'
import './index.css'

const Cart = (props) => {

    
    return(
        <div className ='cart'>
            {props.products.map( (product) => {
                return <CartItem 
                    product={product} 
                    key={product.id} 
                    handleIncreaseQuantity={props.handleIncreaseQuantity} 
                    handleDecreaseQuantity={props.handleDecreaseQuantity} 
                    handleDeleteProduct={props.handleDeleteProduct} 
                />
            })
            }
        </div>
    );
}



export default Cart