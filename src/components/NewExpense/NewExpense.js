import ExpenseForm from '../ExpenseForm/ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const dataPassHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };

    props.onDataPass(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onDataPass={dataPassHandler} />
    </div>
  );
};

export default NewExpense;
