import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition = e=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
        //clean up code: without below function=>can not perform a React update on an unmounted component, so remove listener
        return()=>{
            console.log('component un-mounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])//only can it initial render, useEffect is not called on subsequent renders

    return (
        <div>
            x:  {x} y: {y} 
        </div>
    )
}

export default HookMouse
