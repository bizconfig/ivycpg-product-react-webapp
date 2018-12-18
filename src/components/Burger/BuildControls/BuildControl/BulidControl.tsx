import React from 'react';
import style from './BuildControl.module.css';


const BuildControl = (props:any)=>{
    return(
    <div className={style.BuildControl}>
            <div className={style.Label}>{props.label}</div>
            <button onClick={props.removed} className={style.Less} disabled={props.disabled}>Less</button>
            <button onClick={props.added} className={style.More}>More</button>
    </div>
    );
}
export default BuildControl;