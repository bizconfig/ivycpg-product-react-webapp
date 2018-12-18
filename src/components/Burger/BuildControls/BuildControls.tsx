import React from 'react';
import style from  './BuildControls.module.css';
import BuildControl from './BuildControl/BulidControl'
const controls=[
    {label:'Salad',type:'salad'},    
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]

const BuildControls = (props:any)=>{
  return( 
        <div className={style.BuildControls}>
            <p>Total Price : {props.totalPrice}</p>
            {controls.map(ctrl=>{
             return <BuildControl 
             key={ctrl.label} 
             label={ctrl.label} 
             type={ctrl.type}
             added={()=>props.ingredientAdd(ctrl.type)}
             removed={()=>props.ingredientRemove(ctrl.type)}
             disabled={props.disabled[ctrl.type]}/>
            })}
            <button className={style.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        </div>
        )
}
export default BuildControls;