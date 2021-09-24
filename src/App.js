import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    { title: "Home Provision", price: 147.65, date: new Date(2021, 28, 10) },
    { title: "Bike Service", price: 250.54, date: new Date(2021, 12, 8) },
    { title: "Internet Bill", price: 147.65, date: new Date(2021, 28, 10) },
    { title: "Health Checkup", price: 499.99, date: new Date(2021, 28, 10) },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
