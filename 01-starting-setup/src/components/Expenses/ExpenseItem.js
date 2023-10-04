import React, {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

function ExpenseItem(props){
    const [title, settitle]=useState(props.title);
    const clickHandler = ()=>{
        settitle("updated!")
        console.log(title)
    }
   
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rs {props.cost}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
        
    );
}
export default ExpenseItem;

