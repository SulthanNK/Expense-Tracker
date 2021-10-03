import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './Expense.css';

const Expense = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.data[0].title}
        price={props.data[0].price}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        price={props.data[1].price}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        price={props.data[2].price}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        price={props.data[3].price}
        date={props.data[3].date}
      />
    </Card>
  );
};

export default Expense;
