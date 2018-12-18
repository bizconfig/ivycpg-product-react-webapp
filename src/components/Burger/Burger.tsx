import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger=(props:any)=>{
    let transformedIngredient= Object.keys(props.ingredients).map(igKey=>{
        let emptyarray=[...Array.apply(null, new Array(props.ingredients[igKey]))];
        return (emptyarray).map((_,i)=>{
          return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transformedIngredient.length === 0){
        transformedIngredient.push(<p>Please add ingredients</p>);
    }
        debugger;
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger;