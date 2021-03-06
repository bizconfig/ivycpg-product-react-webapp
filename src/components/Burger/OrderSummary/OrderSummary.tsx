import React from 'react'

import Aux from '../../../hoc/AuxContainer/AuxContainer'
import Button from '../../../components/UI/Button/Button';

const orderSummary = (props:any)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span>{props.ingredients[igKey]}</li>
    })


return(
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
         {ingredientSummary}
        </ul>
        <p>Continue to Checkout ?</p>
        <Button btnType="Success" clicked={props.continued}>CHECKOUT</Button>
        <Button btnType="Danger">CANCEL</Button>
    </Aux>
)
}

export default orderSummary;