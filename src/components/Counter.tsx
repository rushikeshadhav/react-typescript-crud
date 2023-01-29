import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(0);
  return (
    <>
    <h1 className="text-4xl">{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <input type="number" value={text} onChange={(e) => setText(parseInt(e.target.value))} /> 
    <button onClick={() => setCount(text)}>Set</button>
    </>
  )
}

export default Counter