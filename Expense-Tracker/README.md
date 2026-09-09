Expense Tracker

A responsive and interactive Expense Tracker built with React.js.
This project is designed as an intermediate-level React application for managing and viewing personal expenses.

📌 Project Overview

The Expense Tracker allows users to add expenses, view their expense records, organize expenses by category, and keep track of their spending.

The project demonstrates important React concepts such as:

Functional components

useState and React Hooks

Props

Event handling

Forms and controlled inputs

Rendering lists with .map()

Conditional rendering

Filtering data

Component-based architecture

Basic responsive UI design

🚀 Features

Add a new expense

Enter expense title and amount

Select an expense category

Display expenses in a list

Calculate/display total expenses

Filter or organize expenses by category

Delete expenses

Interactive user interface

Responsive layout

🛠️ Technologies Used

React.js

JavaScript (ES6+)

HTML5

CSS3

Vite

React Hooks

📂 Project Structure

Expense-Tracker/
│
├── public/
│
├── src/
│   ├── Components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   └── ...
│   │
│   ├── data/
│   │   └── InitialExpenses.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

The exact component names may change as the project is developed.

⚙️ Installation and Setup

1. Clone or download the project

Open the project folder in VS Code.

2. Open the terminal

Make sure the terminal is inside the project folder:

cd Expense-Tracker

3. Install dependencies

npm install

4. Start the development server

npm run dev

Vite will provide a local URL, usually similar to:

http://localhost:5173/

Open the URL in your browser.

🧩 React Concepts Practiced

useState

Used to store and update dynamic application data such as:

Expense details

Expense list

Selected category

Form input values

Example:

const [expenses, setExpenses] = useState([]);

Props

Props are used to pass data and functions between components.

.map()

Used to display multiple expenses dynamically:

expenses.map((expense) => (
  <div key={expense.id}>
    {expense.title}
  </div>
))

.filter()

Used to filter expenses based on category or other conditions:

expenses.filter((expense) => expense.category === selectedCategory)

📊 Example Expense Data

const initialExpenses = [
  {
    id: 1,
    title: "Groceries",
    amount: 500,
    category: "Food",
  },
  {
    id: 2,
    title: "Bus",
    amount: 100,
    category: "Transport",
  },
  {
    id: 3,
    title: "Movie",
    amount: 300,
    category: "Entertainment",
  },
];

export default initialExpenses;

🎯 Learning Objectives

The main objectives of this project are to learn how to:

Build a React application from scratch.

Divide a UI into reusable components.

Manage application data using React state.

Handle form submissions.

Dynamically render data.

Filter and manipulate arrays.

Create an interactive user experience.

Understand the structure of a real-world React project.

🔮 Future Improvements

Possible future enhancements include:

Edit existing expenses

Local Storage support

Expense charts and graphs

Monthly expense summaries

Date-based filtering

Search expenses

Dark/light mode

Budget limit notifications

Authentication

Backend/database integration

▶️ Available Commands

npm install

Installs all project dependencies.

npm run dev

Starts the development server.

npm run build

Creates a production build.

npm run preview

Previews the production build locally.

👨‍💻 Author

Mohammed Sameer Ahmed

📄 License

This project is created for learning and educational purposes.