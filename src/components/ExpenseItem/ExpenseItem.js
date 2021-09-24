import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>September 23th 2021</div>
      <div className="expense-item__description">
        <h2>Home Provision</h2>
        <div className="expense-item__price">$147.65</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
