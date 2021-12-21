import { useState } from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [formDisplay, setFormDisplay] = useState();

  const formDisplayHandler = () => {
    setFormDisplay(true);
  };

  const formHideHandler = () => {
    setFormDisplay(false);
  };

  const dataPassHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };

    props.onDataPass(expenseData);

    setFormDisplay(false);
  };

  return (
    <div className='new-expense'>
      <div className='app-head'>
        <div>
          {!formDisplay && <h2 className='app-title'>Expense Tracker</h2>}
        </div>
        <div className='app-button'>
          {!formDisplay && (
            <button onClick={formDisplayHandler}>New Expense</button>
          )}
        </div>
      </div>
      {formDisplay && (
        <ExpenseForm onDataPass={dataPassHandler} onCancel={formHideHandler} />
      )}
    </div>
  );
};

export default NewExpense;
