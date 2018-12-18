import React, {Component} from 'react'

import  Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/RXContainer'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICES:any={
    salad:10,
    cheese:10,
    bacon:20,
    meat:40
}
class BurgerBuilder extends Component {
public state:any={
    ingredients:{
        salad:0,
        cheese:0,
        bacon:0,
        meat:0
    },
    totalPrice:0,
    purchasable:false,
    purchasing:false
}
updatePurchaseState(ingredients:any){
   const sum=Object.keys(ingredients)
   .map(iKey=>{
       return ingredients[iKey]
   })
   .reduce((sum,el)=>{
       return sum+el;
   },0);

   this.setState({purchasable:sum>0})
}
addIngredientHandler=(type:string)=>{
const oldCount=this.state.ingredients[type];
const updatedCount=oldCount+1;
const updatedIngredients={
    ...this.state.ingredients
};
updatedIngredients[type]=updatedCount;
const priceAddition=INGREDIENT_PRICES[type];
const oldPrice=this.state.totalPrice;
const newPrice=oldPrice+priceAddition;
this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
this.updatePurchaseState(updatedIngredients)
}
removeIngredientHandler=(type:string)=>{
    const oldCount=this.state.ingredients[type];
    if(oldCount.length<=0){return;}
    const updatedCount=oldCount-1;
    const updatedIngredients={
        ...this.state.ingredients
    };
    updatedIngredients[type]=updatedCount;
    const priceAddition=INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const newPrice=oldPrice-priceAddition;
    this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
    this.updatePurchaseState(updatedIngredients)
    }
purchasingHandler=()=>{
    debugger;
this.setState({purchasing:true});
}
 public render() {
     const disabledInfo={
         ...this.state.ingredients
     }
     for(let key in disabledInfo)
     {
         disabledInfo[key]= disabledInfo[key]<=0;
     }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdd={this.addIngredientHandler} 
                ingredientRemove={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                totalPrice={this.state.totalPrice}
                ordered={this.purchasingHandler}/>
               <Modal show={this.state.purchasing}> <OrderSummary ingredients={this.state.ingredients}/></Modal>
            </Aux>
        );
    }
}

export default BurgerBuilder;