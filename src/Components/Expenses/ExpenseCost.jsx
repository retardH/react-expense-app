import "./ExpenseItem.css"

const ExpenseCost = (props) => {
    return ( 
        <>
            <div className="expense-item__price"> ${props.amount}</div>
        </>
     );
}
 
export default ExpenseCost;