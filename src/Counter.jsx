
import { useState } from "react";

export default function Counter(){

    const [value,setValue] = useState("");
    const [count,setCount] = useState(0);

    function onTextChange(event){
        let v = event.target.value;
        setValue(v)
        console.log(`${v} $ is equal to ${v*31} baht`)
    }

    return (<>

            <input onChange={(event)=>onTextChange(event)}></input><br/>
            <p>{value} $ is equal to {value * 31} baht</p>
            <p>You typed {value.length} chars</p>
            <button onClick={()=>setCount(count + 1)}>Click me ! to Add</button>
            <button onClick={()=>setCount(count - 1)}>Click me ! to Delete</button>
            <button onClick={()=>setCount(0)}>Click me ! to Reset</button>
            <p>You Clicked {count} times</p>
        </>
    );
}