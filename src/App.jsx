import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import Expense from "./components/Expense";
import { DateTime } from "luxon";

function App() {
  const defaultValues = {
    title: "",
    amount: 0,
    date: "",
  };
  const [expenseDetails, setExpenseDetails] = useState(defaultValues);
  const [filterYear, setFilterYear] = useState("None");

  const [expenses, setExpenses] = useState([]);

  const handleFilterYear = (event) => {
    setFilterYear(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(expenseDetails.date);

    const expense = {
      title: expenseDetails.title,
      amount: expenseDetails.amount,
      date: DateTime.fromISO(expenseDetails.date),
    };

    console.log(expense);

    setExpenses([...expenses, expense]);
    setExpenseDetails(defaultValues);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <form className="input-form" onSubmit={handleSubmit}>
        <div className="inputbox-wrap">
          <InputBox
            label="Title"
            placeholder="Enter expense title"
            value={expenseDetails.title}
            onInput={(title) => setExpenseDetails({ ...expenseDetails, title })}
          />
          <InputBox
            label="Amount"
            placeholder="Enter amount in Rs"
            onInput={(amount) =>
              setExpenseDetails({ ...expenseDetails, amount })
            }
            value={expenseDetails.amount}
            type="number"
          />
          <InputBox
            label="Date"
            placeholder="Enter date"
            type="date"
            value={expenseDetails.date}
            onInput={(date) => setExpenseDetails({ ...expenseDetails, date })}
          />
        </div>
        <input type="submit" value="Add expense" className="add" />
      </form>

      <div className="expense-wrapper">
        <div className="expense-header-row">
          <h2>Expenses</h2>
          <label>
            <span>Filter by year </span>
            <select value={filterYear} onChange={handleFilterYear}>
              <option value="None">None</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </label>
        </div>
        <div className="expense-details">
          {expenses
            .filter(
              (expense) =>
                filterYear === "None" || expense.date.year == filterYear
            )
            // .filter(function (expense) {
            //   if (filterYear === "None") return true;
            //   if (expense.date.year == filterYear) return true;
            //   return false;
            // })
            .map((expense) => (
              <Expense details={expense} key={expense} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
