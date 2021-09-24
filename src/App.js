import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenseData = [
    {
      id: "e001",
      title: "Kindle eBooks",
      price: 39.99,
      date: new Date(2021, 1, 10),
    },
    {
      id: "e002",
      title: "Home Utensils",
      price: 355.42,
      date: new Date(2021, 3, 11),
    },
    {
      id: "e003",
      title: "Fuel(monthly)",
      price: 470.61,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e004",
      title: "Desk Lamp",
      price: 43.57,
      date: new Date(2021, 7, 13),
    },
    {
      id: "e005",
      title: "Groceries",
      price: 72.29,
      date: new Date(2021, 9, 14),
    },
  ];

  return (
    <div>
      <h2>Expense Tracker</h2>
      <ExpenseItem
        title={expenseData[0].title}
        price={expenseData[0].price}
        date={expenseData[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseData[1].title}
        price={expenseData[1].price}
        date={expenseData[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseData[2].title}
        price={expenseData[2].price}
        date={expenseData[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenseData[3].title}
        price={expenseData[3].price}
        date={expenseData[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
