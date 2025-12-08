/*       You will find all codes running in week -6- experiment                                    
*---------------------------------------------------(1) ⚡React Re-rendering -----------------------------------------------------

1️⃣ React kab re-render hota hai?
    State change → setState()
    Props change
    Context value change
    Parent re-render → child also re-renders (default)

2️⃣ React kab re-render nahi hota?
    Normal variables change
    useRef change
    Object mutate without setState
    If wrapped with React.memo() (when props same)

3️⃣ Re-render me hota kya hai?
    Component function dobara run hota hai
    New Virtual DOM banta
    React diff karta (old vs new)
    Sirf jaha change ho, woh DOM update hota

4️⃣ Unnecessary re-render kaise roke?
    ! React.memo() → Child re-render roko
    ! useCallback() → Function stable rakho
    ! useMemo() → Expensive calculations memoize karo

5️⃣ Most common cause of extra re-renders
    Parent re-renders = Child re-renders
    Functions/objects har render me new create hote → props change → re-render

6️⃣ Important
    useRef DOES NOT cause re-render
    Strict Mode dev me double-render hota for debugging (production me nahi).

------------------- Why Re-renders Feel ‘Bekaar’ (Problems)--------------------

 1️⃣ Performance issue
    Har re-render me component function dobara run hota →
    Agar component heavy ho, to UI slow lagta.
    
2️⃣ Bachha components bhi re-render
    Parent render → Children also render →
    "Upar change hua, niche sab hil gaya" type issue.
    
3️⃣ Functions/objects har baar recreate hote → extra renders
    Even if UI change nahi hua, React thinks "props change hogaye."
    
4️⃣ API calls / effects bar-bar chal sakte (galat useEffect likh diya to)
5️⃣ Large apps me wasted renders = laggy UI  */  

/*
? Example this code in week 6 experiment --
            import React, {Fragment} from "react"
            import { useState } from "react"

            function App() {
            const [title, setTitle] = useState("My name is harshit");

            console.log("APP RENDERED!");

            function updateTitle() {
                setTitle("My name is " + Math.random());
            }

            return (
                <>
                    <button onClick={updateTitle}>Update the title</button>
                    <Header title={title} />
                    <Header title="harshit lol" />
                </>
            );
            }

            function Header({ title }) {
            console.log("HEADER RENDERED:", title);

            return <div>{title}</div>;
            }


            export default App

NOW CLICK BUTTON AND WATCH THE LOGS
suppose Random = 0.123

    Initial Render
        APP RENDERED!
        HEADER RENDERED: My name is harshit
        HEADER RENDERED: harshit lol

    After clicking button (title changed)
        APP RENDERED!
        HEADER RENDERED: My name is 0.123
        HEADER RENDERED: harshit lol


🧠 IMPORTANT LEARNINGS
    1️⃣ App re-rendered because state changed
        setTitle() → App component re-runs.

    2️⃣ BOTH Header components re-rendered
        Even though second Header ka title change nahi hua,
        React still re-renders all children by default.

    ? 🗿🙏 Yahi React ka “parent re-render → child re-render” rule hai.

    3️⃣ Why does second Header re-render even when props same?
        Because React calls the Header function again.

      React checks:
        Is UI different?
        If same, DOM mei update nahi karta
        BUT function fir bhi run hota.


🛑 Re-render ko kaise roka jaye?
         Agar second Header constant hai and unnecessary re-render nahi chahiye:
        !    const Header = React.memo(function Header({ title }) {
        !        console.log("HEADER RENDERED:", title);
        !        return <div>{title}</div>;
        !       });


        Now logs after clicks
            APP RENDERED!
            HEADER RENDERED: My name is 0.123   // only dynamic one re-renders

    ? Static header won’t re-render. 🎉  */   






/*
*----------------------------------------------------- (2) keys in react-----------------------------------------------------

1. Keys identify elements uniquely during re-renders.
   React uses keys to track which item changed, added, or removed.


2. Keys prevent unnecessary re-renders and DOM destruction.


3. Best key = unique & stable value (id).


4. Never use index as key unless list is static (no add/remove).


5. If key is wrong:
   - Wrong item updates
   - DOM reused incorrectly
   - Bugs in inputs/forms
   - Performance issues


6. Example:
                todos.map(todo => <Todo key={todo.id} />)


7. Key is NOT passed as a prop to the component automatically.
   (If you need id inside component, pass it separately.)



?------------------------------code to understand keys imp-------------------------------
import React from "react";
import { Fragment } from "react";
import { useState } from "react";

let counter = 3;        //ye id:_ ko aage bdhate rhega, jb hum naya add todo krte rhenge

function App() {
  const[todos,setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "go to class",
    description: "go to class today"
  }])


function addTodo() {
  setTodos([...todos, {
    id: counter++,
    title: "go to class"+ Math.random(),
    description: "go to class today"+ Math.random()
  }])

}
      return (
        <div>
          <button onClick={addTodo}>Add a todo</button>
          {todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />)}
        </div>
      )
      
}

function Todo({ id, title, description }) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid white" }}>
      <h1>{id}</h1>
      <h3>{title}</h3>
      <h2>{description}</h2>
    </div>
  );
}

export default App;
*/






/*
*----------------------------------------------------- (3) Wrapper Components-----------------------------------------------------

1. A Wrapper Component is a component whose main job
     is to wrap other components or JSX.
  
  2. It doesn’t add its own UI (or adds very little),


 ? Example Wrapper Component
 ? (wraps children with a styled box)

        !    function Card({ children }) {
        !        return (
        !       <div style={{ padding: 20, border: "1px solid white", borderRadius: 10 }}>
        !            {children}
        !       </div>
        !        );
        !     }
            
 
3. Use-case examples:
     - Layout wrappers (Page, Section)
     - UI wrappers (Card, Container, Modal)
     - Logic wrappers (permission checks, auth guards)
  
  
 
 4. Wrapper Components use "children" prop to render
    - whatever is passed inside them.
 
  
  Usage:
      !  <Card>
      !      <h1>Hello</h1>
      !      <p>This content is wrapped!</p>
      !  </Card>
  
  
 ? 5. Wrapper Components ≠ Higher Order Components.
    - HOC: wraps logic around components.
    - Wrapper: wraps UI/layout around children.


? ---------------------------------------Code example-------------------------------------------
import React from "react";

function App() {
  return (
    <div>
      <Card>
        <h1>Hello Harshit</h1>
        <p>This content is inside a Wrapper Component.</p>
      </Card>

      <Card>
        <h2>Another Card</h2>
        <p>Wrapper components help reuse layout easily.</p>
      </Card>
    </div>
  );
}

//Wrapper Component (uses children)
function Card({ children }) {
  return (
    <div style={{
      padding: "15px",
      margin: "10px",
      border: "1px solid white",
      borderRadius: "10px"
    }}>
      {children}
    </div>
  );
}

export default App;




? -------------------------------------------short note ---------------------------------------------
! ✅ 1. children is NOT a special keyword in JavaScript.
        React just automatically puts inner content into a prop called children.
        Example:
                <Card>
                <h1>Hello</h1>
                </Card>


     React converts this into:
             <Card children={<h1>Hello</h1>} />

 So children is just a normal prop — but React fills it automatically.


🧪 2. Can you rename it? (YES)

        You can write:
                function Card({ something }) {
                return <div>{something}</div>;
                }

                <Card something={<h1>Hello</h1>} />

    This works perfectly.

BUT…
Now you must manually pass the inside content:
            <Card something={<h1>Hello</h1>} />


     This destroys the clean wrapper syntax:
             <Card>
             <h1>Hello</h1>
             </Card>


*/



