import React ,{useState} from 'react'

function HookCounterFour() {
    const [items, setItems]=useState([])//default value is an empty array

    const addItem=()=>{
        //1:make a copy of all the items in the array using spread operator
        //2:append a new item, pass it as a argument to setItems function
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item=><li key={item.id}>{item.value}</li>)
                }
            </ul>  
        </div>
    )
}

export default HookCounterFour
