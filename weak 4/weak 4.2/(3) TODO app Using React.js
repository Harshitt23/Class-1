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
<!DOCTYPE html>
<html lang="en">

<body>

  <h2>Mini React TODO (Diffing using Vanilla JS)</h2>

  <input id="title" type="text" placeholder="Todo title"><br><br>
  <input id="description" type="text" placeholder="Todo description"><br><br>

  <button onclick="addTodo()">Add Todo</button>

  <h3>Your Todos:</h3>
  <div id="todos"></div>

  <script>
     ============================================================
       MINI REACT IMPLEMENTATION (PURE HTML + JS)
    ============================================================ 

    let todos = [];  // old state

    function addTodoToDom(todo) {
      const parent = document.getElementById("todos");

      const child = document.createElement("div");
      child.id = todo.id;
      child.style.border = "1px solid black";
      child.style.margin = "10px";
      child.style.padding = "10px";

      const title = document.createElement("div");
      title.innerHTML = "<b>" + todo.title + "</b>";

      const description = document.createElement("div");
      description.innerHTML = todo.description;

      child.appendChild(title);
      child.appendChild(description);

      parent.appendChild(child);
    }

    function removeTodoFromDom(todo) {
      const element = document.getElementById(todo.id);
      if (element) element.remove();
    }

    function updateTodoInDom(oldTodo, newTodo) {
      const element = document.getElementById(oldTodo.id);
      if (!element) return;

      element.children[0].innerHTML = "<b>" + newTodo.title + "</b>";
      element.children[1].innerHTML = newTodo.description;
    }

    function updateState(newTodos) {
      const oldTodos = todos;

    /// Add or Update
      newTodos.forEach(newT => {
        const oldT = oldTodos.find(o => o.id === newT.id);

        if (!oldT) {
          addTodoToDom(newT);

        } else if (oldT.title !== newT.title || oldT.description !== newT.description) {
          updateTodoInDom(oldT, newT);
        }
      });

      /// Remove missing todos
      oldTodos.forEach(oldT => {
        const exists = newTodos.find(n => n.id === oldT.id);
        if (!exists) {
          removeTodoFromDom(oldT);
        }
      });

      todos = newTodos; // Save new state
    }

    function addTodo() {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;

      const newTodo = {
        id: Math.random(),
        title,
        description
      };

      updateState([...todos, newTodo]);
    }
  </script>

</body>
</html>
*/


/* ===============================================================
   📘 HOW FLOW WORKS (VERY IMPORTANT)
------------------------------------------------------------------

1. User clicks "Add Todo"
2. addTodo() runs
      ↓
3. Creates a new todo object
      ↓
4. Calls updateState(newTodos)

Inside updateState():

5. Compares newTodos vs oldTodos
6. For each todo:
      - If it is new → addTodoToDom()
      - If updated → updateTodoInDom()
      - If removed → removeTodoFromDom()

7. Updates `todos = newTodos`

This is EXACTLY how React (Fiber + Diffing) works internally.
================================================================ */
