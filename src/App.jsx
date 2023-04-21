import ExpenseItem from './Components/Expenses/ExpenseItem'
import {nanoid} from 'nanoid'
import Expenses from './Components/Expenses/Expenses';

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  return (
    <div>
      <h2>Expense App</h2>
      <Expenses className=''>
      {
        expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
      </Expenses>
      
      
    </div>
  );
}
export default App;
