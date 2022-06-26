import React from "react";
import mealsImg from './meals.jpg';
import './Header.css';
import CartButton from "./CartButton";
const Header = props =>{

    const changeState = () =>{
        props.changeState(true);
    }

    return (
    <div>
        <header className='header'>
            <h1>Meals</h1>
            <CartButton stateChange={changeState}/>
        </header>
         img
        <div className="main-image">
            <img src={mealsImg} alt="A food delicious"/>
        </div>
    </div>
    );
}

export default Header;