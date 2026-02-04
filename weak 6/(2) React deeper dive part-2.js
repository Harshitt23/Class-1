/*      
*-----------------------------------------------------Hooks, SideEffects--------------------------------------------------
!⚡ What are Hooks?
    Hooks = special functions that let functional components do things class components used to do.

        React was originally stateless functions.
        Hooks give functions state, lifecycle, and side effect control.

Important built-in hooks:
    useState → manages component state
    useEffect → handles side effects
    useRef → store values without re-render
    useMemo → memoize values
    useCallback → memoize functions
    useContext → use global context


Hooks follow the rules:
    Only call hooks at top level
    Only call hooks inside React components or custom hooks


!🔥 What are Side Effects in React?

A side effect = ANY action that happens outside the normal UI rendering.

        Rendering = pure → only returns JSX
        Side effects = impure → interact with outside world


Examples of side effects:
    Fetching data (API calls)
    Setting timers (setTimeout / setInterval)
    Updating document title
    Adding event listeners (scroll, resize)
    Working with localStorage
    Subscribing to a WebSocket
    Manually changing DOM elements

!This is NOT allowed inside the main component body because it causes unpredictable behavior or infinite loops.

⭐ Why Side Effects Need useEffect?
    React components must be pure → They should only compute JSX and return it.
    Side effects must run AFTER the render, not during render.

Therefore React gives us:
        useEffect(() => {
        // run side effect here
        });


This tells React:
    “Run this code AFTER the UI is painted.”



!🔥 Side Effects + useEffect = The combo you ALWAYS use

Example:
        useEffect(() => {
        console.log("Data fetched!");
        fetch("/todos");
        }, []);

This runs only once (on mount), same as componentDidMount.


⭐ useEffect handles 3 things:
    1️⃣ Run logic after render
    2️⃣ Run logic when dependencies change
    3️⃣ Cleanup logic when component is removed

Example with cleanup:
        useEffect(() => {
        const timer = setInterval(() => {
            console.log("running...");
        }, 1000);

        return () => clearInterval(timer);
        }, []);

🧠 Why React is strict about side effects?
    Because if you run effects directly in the component:
    State updates may cause infinite re-renders
    Timers may never clear → memory leaks
    DOM may update before React finishes reconciling
    Data fetching may duplicate


So React enforces effects through useEffect, which runs after rendering.

 ?-------------------------------------🗿🙏 TL;DR--------------------------------------
Side Effects = actions outside render (API calls, timers, listeners)
Hooks = React functions that give functional components powers (state, effects, memoization)
useEffect = the hook used to handle all side effects properly and safely in React.



*------------------------------------------------------ (1) UseEffect ----------------------------------------------------
! useEffect - React Hook for side effects

1. Runs after component renders.
        Syntax:
        useEffect(() => {
        side effect code
        }, []);


2. Three types:
    a) Runs on every render:
        useEffect(() => {
        ...
        });

    b) Runs only once (on mount):
        useEffect(() => {
        ...
        }, []);

    c) Runs when dependencies change:
        useEffect(() => {
        ...
        }, [value]);


3. Common use-cases:
    - API calls
    - Timers (setTimeout, setInterval)
    - Event listeners
    - Subscriptions
    - Updating document title


4. Cleanup function:
    useEffect(() => {
    setup

    return () => {
        cleanup (runs on unmount or before next effect)
    };
    }, []);


5. Rules:
    - Dependencies in array must be used inside effect.
    - Without dependency array → runs every render.
    - With empty array → runs once.
    - With values → runs when those values change.


 ! TLDR:
    useEffect = run code after render.
    [] = once
    no [] = every render
    [x] = when x changes

    
? -------------------✅ useEffect Notes for Polling TODOS (JS Style)---------------------
 Goal:
    1. Create an app that polls a server
    2. Fetches the latest list of TODOs
    3. Renders those TODOs on the screen

! Polling means repeatedly calling the server every X seconds.

useEffect is used because:
    - We want the API call to run after the component renders
    - We want to set up a timer (setInterval)
    - We want to clean up the timer when the component unmounts


Steps:
    1. useState to store todos
    2. useEffect to start polling
    3. Inside useEffect → setInterval to call API repeatedly
    4. Update todos when API returns new data
    5. Cleanup function → clearInterval to avoid memory leaks


?-----------------------✅ React Example Code (Polling TODO Server)----------------------------
// Polling Todos App with Todo component
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3001/todos")
        .then(res => res.json())
        .then(data => {
          setTodos(data || []);
        })
        .catch(() => {
          // handle fetch error silently for now
        });
    }, 2000); // polls every 2 sec

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Todos:</h1>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

// Todo component accepts title and description and renders them
function Todo({ id, title, description }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "2px solid #ccc" }}>
      <h4>{id}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;



?----------------------------⭐ Extra Notes (JS Style)---------------------------
Why useEffect for polling?
    Because polling is a side effect that must run after render.

Why empty dependency array?
    Because we want to set up the polling only once when component loads.

Why cleanup?
    To stop the interval when component unmounts. Prevents memory leaks.

How often does polling run?
    Every X milliseconds depending on setInterval.

What gets updated?
    The todos state gets new values from the server, triggering a rerender.

Key concept:
    Rendering should be pure. Polling is not pure → must be inside useEffect.
*/





/*
*----------------------------------------------------- (2) UseState-------------------------------------------------------
1. What is useState?
    A hook that allows a component to store and update values.

2. Why do we use it?
    Because normal variables do NOT re-render the UI.
    useState values update the UI automatically.

3. Basic syntax
    const [value, setValue] = useState(initialValue);

Example:
    const [count, setCount] = useState(0);

4. How to update state
    setCount(count + 1);

! Whenever you call the setter → component re-renders.

5. Important rules
        State updates are asynchronous
        Never modify state directly

        count = count + 1; ❌ wrong
        setCount(count + 1) ✔️ correct

useState is used inside a component, never outside.


6. Example Code :
    function App() {
    const [title, setTitle] = useState("hello");

    return (
        <div>
        <h1>{title}</h1>
        <button onClick={() => setTitle("updated")}>
            Change Title
        </button>
        </div>
    );
    }

7. What re-renders the component?
    Calling setState → React re-runs the component → UI updates.


*/


sd

/*
*----------------------------------------------------- (3) UseMemo--------------------------------------------------------


*/





/*
*---------------------------------------------------- (4) UseCallBack ---------------------------------------------------


*/





/*
*----------------------------------------------------- (5) UseRef -------------------------------------------------------


*/






/*
*----------------------------------------------------- (6) CustomHooks -------------------------------------------------------


*/






/*
*----------------------------------------------------- (7) PropDrilling -------------------------------------------------------


*/




