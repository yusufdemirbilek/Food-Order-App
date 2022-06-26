
import './App.css';
import Header from './components/Header';
import Meals from './components/Meals';
import ShoppingCard from './components/ShoppingCard';
import { useState } from 'react';
function App() {
  const [showShopingCard, setShowShopingCard] = useState(false);
  const changeState= (val) =>{
    setShowShopingCard(val)
}
  return (
    <div className="App">
      <ShoppingCard modalState={showShopingCard} modalStateFunc={changeState}></ShoppingCard>
      <Header changeState={changeState}/>
      <Meals/>
    </div>
  );
}

export default App;
