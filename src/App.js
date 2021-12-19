import { useState } from 'react';

import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const dummyData = [
  {
    id: 'e001',
    title: 'Clock',
    price: 25.99,
    date: new Date(2020, 1, 10),
  },
  {
    id: 'e002',
    title: 'Desk Lamp',
    price: 43.55,
    date: new Date(2020, 7, 13),
  },
  {
    id: 'e003',
    title: 'Mobile Stand',
    price: 72.99,
    date: new Date(2021, 9, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpense = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <NewExpense onDataPass={addExpense} />
      <Expense data={expenses} />
    </div>
  );
};

export default App;
