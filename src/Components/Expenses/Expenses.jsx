import './Expenses.css'
const Expenses = (props) => {
    const classes = 'expenses ' + props.className
    return ( 
        <div className={classes}>
            {props.children}
        </div>
     );
}
 
export default Expenses;