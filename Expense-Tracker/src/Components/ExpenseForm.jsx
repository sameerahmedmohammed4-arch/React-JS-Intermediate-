import React from "react";
import { useState } from "react";
import initialExpenses from "../data/InitialExpenses";
function Expenses() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [editId, setEditId] = useState(null);
  const [expenses, setExpenses] = useState([]);
  
  
  
  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      category: category,
      date: date,
    };
    setExpenses([...expenses, newExpense]);
    setName("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  const totalIncome = expenses
    .filter((expense) => expense.category === "Income")
    .reduce((total,expense)=> total + expense.amount,0);

  const totalExpenses = expenses
    .filter((expense) => expense.category !== "Income")
    .reduce((total, expense) => total + expense.amount, 0);

  const totalBalance = totalIncome - totalExpenses;
// console.log(totalExpenses);
  // console.log(expenses);
  
  const editExpense = (id) =>{
    const expenseToEdit = expenses.find((expense) => expense.id === id)
    
    setName(expenseToEdit.name)
    setCategory(expenseToEdit.category)
    setAmount(expenseToEdit.amount)
    setDate(expenseToEdit.date)
    

    setEditId(id);
  }

  const deleteExpense = (id) =>{
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }
  // console.log(deleteExpense)
  return (
    <div>
      <header className="header">
        <h1>
          {" "}
          <i class="fa-solid fa-wallet"></i>Expense Tracker{" "}
        </h1>
      </header>
      <form className="form" onSubmit={addExpense}>
        <div>
          <div>
            <label>Expense Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your expense"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="text"
              value={amount}
              placeholder="Enter the amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label>Category</label>
            <select
              id=""
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              required
              value={category}
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Clothes">Clothes</option>
              <option value="Grocery">Grocery</option>
              <option value="Income">Income</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <div>
            <label>date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <button type="submit">Add expense</button>
          </div>
        </div>
      </form>

      <div className="summary-section">
        <div className="summary">
          <div>
            <i class="fa-solid fa-wallet"></i>
          </div>
          <div>
            <h3>Total Expenses </h3>
            <p>${totalExpenses}</p>
          </div>
        </div>
        <div className="summary">
          <div>
            <i class="fa-solid fa-arrow-trend-up"></i>
          </div>
          <div>
            <h3>Total Income</h3>
            <p>${totalIncome}</p>
          </div>
        </div>
        <div className="summary">
          <div>
            {" "}
            <i class="fa-solid fa-scale-balanced"></i>
          </div>
          <div>
            <h3>Balance </h3>
            <p>${totalBalance}</p>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-expenses">
                  No Expenses Yet
                </td>
              </tr>
            ) : (
              expenses.map((expense) => {
                return (
                  <tr key={expense.id}>
                    <td>{expense.name}</td>
                    <td>{expense.category}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                    <td>
                      <button>Edit</button>
                      <button onClick={() =>{
                        deleteExpense(expense.id)
                      }}>Delete</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Expenses;