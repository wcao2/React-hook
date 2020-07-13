import React ,{useState,useEffect} from 'react'

function HookCounterOneUE() {

    //0: initialize count is 0
    const [ count,setCount]=useState(0)

    const [name,setName]=useState('')

    //when specify useEffect,we are basically requesting react to execute the function
    //that is passed as an argument in useEffect after every time the component renders
    //easily access the components the state and props without having to write any additional code
    useEffect(()=>{
        console.log('use effect updating document title')
        //after initial render and after subsequent render
        document.title=`You clicked ${count} times`
    },[count])//second parameter is the array of values that effect depends on
    //effect to be executed only count value changes
    //how do we tell react to conditionally run useEffect only when the count value changess

    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOneUE
