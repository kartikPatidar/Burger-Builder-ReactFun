import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igkey => {
        return (
        <li key={igkey}>
            <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
        </li> );
        });
    return ( 
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.pCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.pContinued}>CONTINUE</Button>
        </>
     );
}
 
export default orderSummary;