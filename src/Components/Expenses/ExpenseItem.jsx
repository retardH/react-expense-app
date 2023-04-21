import ExpenseCost from "./ExpenseCost";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import Card from '../Card/Card'
import "./ExpenseItem.css"
import { useState } from "react";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div>
                <ExpenseTitle title={title}/>
                <ExpenseCost amount={props.amount}/>
            </div>
        </Card>
    )
}

export default ExpenseItem;