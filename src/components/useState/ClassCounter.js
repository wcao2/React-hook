import React, { Component } from 'react'

//1: create a class component
class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        //2: create a state variable and initialize it to 0
        this.state = {
             count:0
        }
    }

    //3: create a method that capable of setting the state value
    increment =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.increment}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
