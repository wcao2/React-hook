import React ,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const [count,setCount]=useState(initialCount)
     
    const incrementFive = () =>{
        for(let i=0;i<5;i++){
            //update the value based on the previous value
            setCount(prevCount => prevCount+1)
        }
    }

   //setCount() passes in a function 
    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevcount=>prevcount+1)}>Increment</button>
            <button onClick={()=>setCount(prevcount=>prevcount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
