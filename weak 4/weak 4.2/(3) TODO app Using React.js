/*    React is Better Than Direct DOM Manipulatiom. ------------ 
            React is not replacing JavaScript.
            React is replacing YOU manually fighting with the DOM.

        So doing DOm manipulation is very hard,
        whenever we r creating a dynamic website , we will use react instead.

❌ DOM:
  Slow
  Manual updates
  Hard to manage
  No components
  UI breaks easily
  Not scalable


✅ React:
  Fast Virtual DOM)
  Auto updates
  Components
  Reusable UI
  Scalable for big apps
  Cleaner code
  Better developer experience


React = DOM + Power ⚡
DOM = Raw phone
React = Smartphone with apps, features, automation.


-------------------------------------------------------------------------------------------------------
   how to install react - mpm create vite@latest    
                        - give project name 
                        - select React
                        - select JS                                     
                        - yall good to go */
                        

//------------------------------------------IMPLEMENTATION----------------------------------------------
/*
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7–9",
      completed: false
    }, 
    {
      title: "Study DSA",
      description: "Study DSA from 9–11",
      completed: false
    },
    {
      title: "Study React",
      description: "Study React from 11–1",
      completed: true
    }
  ]);

  function addTodo() {
    /// add a random todo
    setTodos([
      ...todos,
      {
        title: "Random Todo " + (todos.length + 1),
        description: "This is a random description",
        completed: false
      }
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>

      {todos.map(function (todo, index) {
        return (
          <Todo 
            key={index}
            title={todo.title} 
            description={todo.description} 
          />
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
*/  

//-----------------------Code Explanation (in plain English, not professor-ji style)------APP.jsx--------------
/*
Think of React state as your tiny notebook of todos — React keeps it safe, but only if you use the right ritual (useState).


1. Creating the todo list
        const [todos, setTodos] = useState([...])

        This line summons two things:
        todos → your current array of todo objects
        setTodos → the magic pen that can update that array

        React refuses to let you modify todos directly (it snatches the pen away like a strict librarian).


2. Adding a todo----------------
      function addTodo() {
        setTodos([
          ...todos,
          { title: "...", description: "...", completed: false }
        ]);
      }


      ...todos → keeps old todos
      second object → pushes a new one
      This is React’s way of saying, “don’t mutate the past; create a fresh timeline.”


3. Rendering todos---------------
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}

      map() loops through each todo like a conveyor belt and prints one <Todo /> component for each item.


      4. Child component
      function Todo(props) {
        return (
          <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
          </div>
        );
      }

      Each Todo component receives props from the parent and displays them.

--------------------------🎯 TL;DR (the compressed wisdom scroll)---------------------------------

  State stores your todo list
  setTodos updates it
  map renders each todo
  Todo component displays individual items
  Spread operator (...todos) keeps old items when adding new ones

*/