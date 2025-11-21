/*TODO app using DOM - Better than (1), not than (3) 

-----------------------------Full code------------------------------
<html>
<script>
    let globalId = 1;

    function markAsDone(todoId) {
        const parent = document.getElementById(todoId);
        parent.children[2].innerHTML = "Done!";
    }

    function createChild(title, description, id) {
        const child = document.createElement("div");

        const firstGrandParent = document.createElement("div");
        firstGrandParent.innerHTML = title;

        const secondGrandParent = document.createElement("div");
        secondGrandParent.innerHTML = description;

        const thirdGrandParent = document.createElement("button");
        thirdGrandParent.innerHTML = "Mark as done";
        thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);

        child.appendChild(firstGrandParent);
        child.appendChild(secondGrandParent);
        child.appendChild(thirdGrandParent);

        child.setAttribute("id", id);
        return child;
    }

    function addTodo() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const parent = document.getElementById("todos");

        parent.appendChild(createChild(title, description, globalId++));
    }
</script>

<body>
    <input type="text" id="title" placeholder="Todo title" />
    <br><br />
    <input type="text" id="description" placeholder="Todo description" />
    <br><br />
    <button onclick="addTodo()">Add todo</button>

    <div id="todos"></div>
</body>
</html>
*/

//---------------------------Explanation------------------------------
//just simple HTML - 
<html>
  <body>

    <input id="title" type="text" placeholder="Todo title" />
    <input id="description" type="text" placeholder="Todo description" />
    <button onclick="addTodo()">Add Todo</button>

    <div id="todos"></div>

    <script src="todo_notes.js"></script>
  </body>
</html>

/*
⭐ CONTROL FLOW EXPLANATION :

1️⃣ User clicks "Add Todo"
      ↓
2️⃣ addTodo() runs  
      ↓
   - reads input values  
   - gets parent container  
      ↓
3️⃣ addTodo() calls createChild(title, description, id)
      ↓
4️⃣ createChild() builds a todo block using DOM
      ↓
5️⃣ addTodo() appends that block onto the screen
      ↓
6️⃣ User clicks "Mark as done"
      ↓
7️⃣ markAsDone(id) updates button text
=====================================================================
*/

let globalId = 1;


// ===================================================================
// 🧩 FUNCTION 1 — addTodo()
// ===================================================================

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const parent = document.getElementById("todos");

  parent.appendChild(createChild(title, description, globalId++));

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}


// ===================================================================
// 🧩 FUNCTION 2 — createChild()
// Builds the HTML dynamically using DOM
// ===================================================================

function createChild(title, description, id) {
  const child = document.createElement("div");

  const firstGrandParent = document.createElement("div");
  firstGrandParent.innerHTML = title;

  const secondGrandParent = document.createElement("div");
  secondGrandParent.innerHTML = description;

  const thirdGrandParent = document.createElement("button");
  thirdGrandParent.innerHTML = "Mark as done";
  thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);

  child.appendChild(firstGrandParent);
  child.appendChild(secondGrandParent);
  child.appendChild(thirdGrandParent);

  child.setAttribute("id", id);

  return child;
}


// ===================================================================
// 🧩 FUNCTION 3 — markAsDone()
// ===================================================================

function markAsDone(todoId) {
  const parent = document.getElementById(todoId);
  parent.children[2].innerHTML = "Done!";
}


/* ----------------------✔ Summary----------------------------

DOM lets us:
- Read HTML elements
- Create new UI blocks dynamically
- Modify page without refresh
- Avoid writing backend for simple features

This todo app proves:
React automates this DOM manipulation.
DOM = You manually do all this structure management.
React = Does this intelligently without you touching createElement().


-------------------✔ Why this is better:----------------------

No innerHTML
No string concatenation
Real DOM nodes being created
Maintainable & structured

--------------------🔥 Harkirat Explaining the PROBLEM--------------------

Look at this slide:
    Problem with this approach
    Very hard to add/remove element
    No central state
    Hard when TODOs come from server
    What if a TODO updates from mobile?
    How will you re-render the DOM?
    This is the actual reason why React exists.

-------------------🚨 THE REAL POINT OF THESE EXAMPLES--------------------

Harkirat is showing you how complicated UI becomes when:
    you manually create DOM nodes
    manually append them
    manually update them
    manually remove them
    manually reflect server changes

When your TODO list becomes:
    editable
    deletable
    synced with server
    dynamic
    shared with other devices

👉 Pure DOM manipulation becomes a nightmare
*/