import React ,{useState} from 'react'

//1: create a functional component
function HookCounter() {
    
    //2: need a state property initialize to 0
    //3: need a method capable of setting that state property value

    //setCount, then the component will re-render
    
    //0 is initial value of state property;
    //useState(this hook is function) 
    //accepts argument and returns current value of the property and a method that is capable of updating that state property
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Count { count }</button>
        </div>
    )
    
}

export default HookCounter
