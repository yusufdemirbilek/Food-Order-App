import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = props =>{
    return(<div>
    <MealsSummary/>
    <AvailableMeals/>
    </div>
    );
}

export default Meals;