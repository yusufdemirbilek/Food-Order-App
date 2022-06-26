
import Modal from "./Modal";
import { useState,useEffect } from "react"
import "./ShoppingCard.css";


const ShoppingCard = props => {
    const [showShopingCard, setShowShopingCard] = useState(false);
    useEffect(()=>{
        setShowShopingCard(props.modalState)
    
    },[props.modalState])
    const cartItems = [];
    return (
        <>
            {showShopingCard && <div className="shopping-card">
                <div className="shoping-card-modal">
                    {cartItems}
                    <div className="total">
                        <span>Total Amount</span>
                        <span>35.62</span>
                    </div>
                    <div className="actions">
                        <button onClick={()=>{setShowShopingCard(false);    props.modalStateFunc(!showShopingCard)}} className="button--alt">Close</button>
                        <button className="button">Order</button>
                    </div>
                </div>
            </div>
}
        </>

    )
}

export default ShoppingCard;