import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from './productSlice';
import { addProductToCart, checkout, cartTotal } from './cartSlice';
import { currency } from '../currency';

class ShoppingCart extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return (
            <div>
                <p>Picked Items</p>
                <ul>
                    {
                        this.props.cartItem.map(m => 
                        <li key={m.id}>{m.title} - {currency(m.price)} - {m.quantity}</li>)
                    }
                </ul>
                <p>total : <span>{currency(this.props.cartTotal)}</span></p>
                <button onClick={()=>{this.props.checkout(this.props.cartItem)}}>Check Out</button>
                <p>{ this.props.checkoutStatus && this.props.checkoutStatus}</p>
            </div>
        )
    }
}

export default connect(
    (state)=> ({
        cartItem : state.cart.items,
        products : state.product.products,
        cartTotal : cartTotal(state),
        checkoutStatus : state.cart.checkoutStatus
    }),
    
    /* ({cart})=> ({
        cartItem : cart.items
    }), */
    { fetchProducts, addProductToCart, checkout } // 사용해서 연결할 actions 
)(ShoppingCart);

//카트 리스트 노출 ㅇ
//카트 리스트에 카트 수량 노출 ㅇ
//