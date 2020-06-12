import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngrediants = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey} />
            })
        })
        .reduce((arr, element) => {
            return arr.concat(element)
        }, []);
    if (transformedIngrediants.length === 0) {
        transformedIngrediants = <p>Please start adding ingredients!</p>
    }
    return ( 
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngrediants}
            <BurgerIngredient type="bread-bottom" />
        </div>
     );
}
 
export default burger;