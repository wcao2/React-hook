import React from 'react'
import './App.css'
import ClassCounter from './components/useState/ClassCounter'
import HookCounter from './components/useState/HookCounter'
import HookCounterTwo from './components/useState/HookCounterTwo'
import HookCounterThree from './components/useState/HookCounterThree'
import HookCounterFour from './components/useState/HookCounterFour'
import ClassCounterOneUE from './components/useEffect/ClassCounterOneUE'
import HookCounterOneUE from './components/useEffect/HookCounterOneUE'
import HookMouse from './components/useEffect/HookMouse'
import ClassMouse from './components/useEffect/ClassMouse'
import MouseContainer from './components/useEffect/MouseContainer'


function App1() {
    return (
        <div className='App'>
            {/* <ClassCounter/> */}
            {/* <HookCounterOneUE/> */}
            {/* <HookMouse/>
            <ClassMouse/> */}
            <MouseContainer/>
        </div>
    )
}

export default App1
