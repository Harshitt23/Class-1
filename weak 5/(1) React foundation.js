/*
You need react for dynamic websites , where there is js, functions, calculation and buttons and logic included.
If there was a static webiste like only html then u dont need ract , u can just do it simple with DOM or html.

Example if there are things like notifications - and we have to update it , React lets you update only the state, 
and it automatically re-renders just the changed part, while without React you must manually update and rebuild
DOM elements, which becomes messy and unscalable
also u can add further components for fututre expansion --
        state {
            notifications
            component 1
            compnent 2
        }

-----------------🧠 React Notes – Why React? What happens under the hood?--------------------

⭐ 1. What is React actually? - React is NOT a new language.
 React is just:
    👉 An easier, cleaner way to write HTML + CSS + JS together inside JavaScript
    👉 A UI library that helps you build components
    👉 A smarter alternative to manually manipulating the DOM

---------------------------------------------------------------------------------------------

React gives you a new syntax called JSX.

⭐ 2. What is JSX? - JSX = JavaScript + XML-like syntax

Example:
    function App() {
    return (
        <div>
        <h1>Hello</h1>
        </div>
    );
    }

--------------------------------------------------------------------------------------------

But browsers cannot understand JSX.
⭐ 3. So how does the browser run React code?
When you run:
    npm run build

React + Vite/Next/Babel will:

✅ Convert JSX → Normal HTML
✅ Convert styling → Normal CSS
✅ Convert JS → Browser-compatible JS
📌 Final output = Pure HTML + CSS + JS
The browser only sees regular web files, nothing React-specific.

--------------------------------------------------------------------------------------------

⚡ React: State / Components / Re-rendering (Short Notes)

✅ State
State = data of your component.
    Example:

    {
    notifications: 11
    }


✅ Component
Component = UI block that displays state.
    Example: the Notifications bell showing number 11.


✅ Re-rendering
When state changes, React re-renders the component.
Re-render = React updates the actual DOM to match the new state.
    Example:

    Old state: notifications: 11

    New state: notifications: 12
    → React updates the UI automatically.
*/



//-------------Code of Counter App Using State + Components (Vanilla JS → React Thinking)-------------
/*

✅ Flow (Very Simple Explanation)
    1️⃣ State variable exists
        let state = { count: 0 };
    2️⃣ User clicks the button → onButtonPress() runs
        Increases state.count
        Calls buttonComponentReRender()

    3️⃣ Re-render function deletes old UI & creates new UI
        Clears the container
        Creates a new button element
        Sets text = Counter X
        Appends to DOM

    4️⃣ UI updates every time state changes
        This mimics React’s behavior:
        👉 State change → component re-render → DOM updates


📌 Key Takeaway
    React is just a fancy way to do this:
        State + Component + Re-rendering   
 
-------------------------------------------------------------------

📦 FULL CLEAN CODE (Copy-Paste Ready)
    <!DOCTYPE html>
    <html>

    <body>
        <div id="buttonParent"></div>

        <script>
        
            /// STATE
          
            let state = {
                count: 0
            };

          
            /// EVENT HANDLER
          
            function onButtonPress() {
                state.count++;
                buttonComponentReRender();
            }

          
            /// COMPONENT (UI Renderer)
          
            function buttonComponentReRender() {
                /// Remove old UI
                document.getElementById("buttonParent").innerHTML = "";

                /// Create new button with updated state
                const button = document.createElement("button");
                button.innerHTML = "Counter " + state.count;
                button.setAttribute("onclick", "onButtonPress()");

                /// Add to DOM
                document.getElementById("buttonParent").appendChild(button);
            }

            /// Initial render
            buttonComponentReRender();
        </script>
    </body>

    </html>

-------------------------------------------------------------------

📝 SHORT NOTES (Very Important)
    🔹 State
        Stores dynamic data (count)
        Changes over time

    🔹 Component Function
        Reads state
        Creates UI based on state

    🔹 Re-render
        You delete old UI + create new UI every time
        React does this automatically — we do it manually here

    🔹 Why do this?
        To understand:
            ✔ how React updates UI
            ✔ how component functions work
            ✔ how state triggers re-renders

 */