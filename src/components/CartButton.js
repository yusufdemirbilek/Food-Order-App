import React from "react";

import './CartButton.css';

const CartButton = props =>{
    return (
    <button className="button">
    
    <span>
        Your Cart
    </span>
    <span className="badge">
        3
    </span>
    </button>
    );
}

export default CartButton;