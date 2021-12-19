import { useState } from 'react';

import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

import './Expense.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let conditionedExpense = <p>No expenses were found for this filter.</p>;

  if (filteredExpenses.length > 0) {
    conditionedExpense = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          defaultFilter={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {conditionedExpense}
      </Card>
    </div>
  );
};

export default Expense;
