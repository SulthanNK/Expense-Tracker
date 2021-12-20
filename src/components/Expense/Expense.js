import { useState } from 'react';

import Card from '../Card/Card';
import ExpenseChart from '../ExpenseChart/ExpenseChart';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';

import './Expense.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          defaultFilter={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList list={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
