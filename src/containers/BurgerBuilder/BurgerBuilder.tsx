import React, {Component} from 'react'

import  Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/AuxContainer/AuxContainer'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../Service/orders-service'
import Spinner from '../../components/UI/Spinner/Spinner'
import errorHandler from '../../hoc/ErrorHandler/ErrorHandler';

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
    purchasing:false,
    Loading:false
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
this.setState({purchasing:true});
}
purchaseContinueHandler=()=>{
    this.setState({Loading:true})
    const order={
        ingredients:this.state.ingredients,
        price:this.state.totalPrice,
        customer:{
            name:'Rakesh',
            address:{
                street:'mgr nagar'
            },
            email:'rakeshswain1986@gmail.com'
        }
    }
    axios.post('/order.json',order)
    .then(
        response=> this.setState({Loading:false, purchasing:false})
        )
    .catch(
        error=>this.setState({Loading:false, purchasing:false})
        );
}
 public render() {
     const disabledInfo={
         ...this.state.ingredients
     }
     for(let key in disabledInfo)
     {
         disabledInfo[key]= disabledInfo[key]<=0;
     }
     let orderSummary=<OrderSummary 
     continued={this.purchaseContinueHandler}  
     ingredients={this.state.ingredients}/>

     if(this.state.Loading)
     {
        orderSummary=<Spinner/>
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
               <Modal show={this.state.purchasing}> 
                 {orderSummary}
               </Modal>
            </Aux>
        );
    }
}

export default errorHandler(BurgerBuilder,axios);