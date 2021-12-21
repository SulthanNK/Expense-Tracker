import ExpenseItem from '../ExpenseItem/ExpenseItem';

import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.list.length === 0) {
    return (
      <h3 className='expenses-list__fallback'>
        No expenses were found for this filter.
      </h3>
    );
  }

  return (
    <ul className='expenses-list'>
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
