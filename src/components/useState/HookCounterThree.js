import React, {useState} from 'react'

function HookCounterThree() {
    //state variable name is an object; setName is to update the corresponding state variable
    const [name,setName]=useState({firstName:'',lastName:''})
    //copy every property in the name object then just overwrite the first/last name field with a diff value
    //set function provided by hook doesn't merge and update object, merge by myself and pass it to the set function
    return (
        <form>
            <input type="text"
                   value={name.firstName} 
                   onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text"
                   value={name.lastName} 
                   onChange={e=>setName({...name,lastName:e.target.value})}/>

            <h2>first Name is {name.firstName}</h2>
            <h2>last Name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounterThree
