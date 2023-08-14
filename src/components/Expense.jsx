import "./Expense.css";
function Expense({ details }) {
  return (
    <div className="exp-row">
      <div className="date">
        <div className="day">{details.date.day}</div>
        <div className="month">
          {details.date.toLocaleString({ month: "short" })}
        </div>
      </div>
      <div className="title">{details.title}</div>
      <div className="amount">₹{details.amount}</div>
    </div>
  );
}

export default Expense;
