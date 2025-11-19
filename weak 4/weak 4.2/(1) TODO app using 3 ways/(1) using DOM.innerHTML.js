//We will be creating a simple TODO app in first three files (1),(2),(3) --
//  (1) - DOM manipulation using .innerHTML
//  (2) - Dom manipulation using document.createElement  ( Cleaner way of DOM )
//  (3) - using react
/* this is the first file - usig simple DOM
a simple TODO app built using pure JavaScript + DOM (no React).
-----------------------------------------
✅ What This Program Does:
This is a very basic TODO app where you enter: a title, a description
Then click “Add Todo” and it appends a new todo item to the container.

-----------------------------------------
🔍 How It Works:
The app uses DOM manipulation:

1. Read Input Values
const title = document.getElementById("title").value;
const description = document.getElementById("description").value;

2. Store the previous HTML
const originalHtml = document.getElementById("container").innerHTML;

-----------------------------------------
This is important because:
👉 innerHTML = ... replaces everything inside the container
So to append, we must do:

newHTML = oldHTML + newTodoHTML

3. Append new todo
document.getElementById("container").innerHTML =
  originalHtml +
  `
  <div>
      <div>${title}</div>
      <div>${description}</div>
      <button>Mark as done</button>
  </div>
  `;

------------------------------------------------------------------
📌 Full Working Code 
<script>
    function addTodo() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        const originalHtml = document.getElementById("container").innerHTML;

        document.getElementById("container").innerHTML = 
            originalHtml + `
            <div>
                <div>${title}</div>
                <div>${description}</div>
                <button>Mark as done</button>
            </div>
        `;
    }
</script>

<body>
    <div>
        <input id="title" type="text" placeholder="title"> </input> <br><br>
        <input id="description" type="text" placeholder="description"> </input> <br><br>

        <button onclick="addTodo()">Add todo</button>

        <div id="container"></div>
    </div>
</body>
</html>

-------------------------🎯 Summary-----------------------------
Method	                    Difficulty	         Problems	        Why it exists
.innerHTML	                   ⭐	             Many	            Fast demo
document.createElement	     ⭐⭐	               Less	              Clean DOM
React	                 ⭐⭐⭐⭐⭐	           Few	         Professional apps

*/