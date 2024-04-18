import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

const Priorities = ["High", "Medium", "Low"];
const PriorityOrder = { High: 1, Medium: 2, Low: 3 };
const SampleTodo = [
  {
    sno: 0,
    title: "How to use me?",
    desc: "Click on AddTodos to add a new todo, add a title, description and priority. " + 
          "This page will be sorted according to the priority. You can delete me, if you don't need me anymore.",
    priority: "High",
  },
];

//ToDo: proper edge case testing - Done
//ToDo: proper comments required
//feature: search todos

function App() {
  let initTodo = SampleTodo;

  if (localStorage.getItem("todos")) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc, priority) => {
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      priority: priority,
    };

    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="TODO" searchBar={true} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Todos
                  todos={todos}
                  setTodos={setTodos}
                  priorityOrder={PriorityOrder}
                  onDelete={onDelete}
                />
              );
            }}
          ></Route>
          <Route exact path="/about">
            <AddTodo addTodo={addTodo} Priorities={Priorities} />
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
