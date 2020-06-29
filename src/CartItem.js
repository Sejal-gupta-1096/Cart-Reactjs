import React from 'react';
import './index.css'

class CartItem extends React.Component{

    
    render(){
        const {title , qty , price} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs. {price}</div>
                    <div style={{color : '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img onClick={() => this.props.handleIncreaseQuantity(this.props.product)} className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828817.svg" />
                        <img onClick={() => this.props.handleDecreaseQuantity(this.props.product)} className="action-icons" src="https://image.flaticon.com/icons/svg/929/929430.svg" />
                        <img className="action-icons" src="https://image.flaticon.com/icons/svg/3089/3089818.svg" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem