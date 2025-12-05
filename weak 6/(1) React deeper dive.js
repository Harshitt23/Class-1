/* ------------------⚡React Re-rendering — Short Notes----------------------
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
    React.memo() → Child re-render roko
    useCallback() → Function stable rakho
    useMemo() → Expensive calculations memoize karo

5️⃣ Most common cause of extra re-renders
    Parent re-renders = Child re-renders
    Functions/objects har render me new create hote → props change → re-render

6️⃣ Important
    useRef DOES NOT cause re-render
    Strict Mode dev me double-render hota for debugging (production me nahi).

------------------- Why Re-renders Feel ‘Bekaar’ (Problems)-------------------------

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