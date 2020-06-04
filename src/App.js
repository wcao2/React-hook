import React,{useState} from 'react';

function Todo({todo,index,completeTodo,deleteTodo}){
    return(
        <div style={{textDecoration:todo.isCompleted?'line-through':''}}>
            { todo.text }
            <div>
               <button onClick={()=>completeTodo(index)}>Complete</button>
               <button onClick={()=>deleteTodo(index)}>Delete</button>
            </div>
        </div>
    )
};

function TodoForm({addTodo}){
      const [value, setValue]=useState('');

      //handleSubmit variable that will handle my addTodo Function
      const handleSubmit=e=>{
          e.preventDefault();
          if(!value) return;
          //pass in here as a prop
          addTodo(value);
          //clear the form
          setValue('');
      }

      return(
          <form onSubmit={handleSubmit}>
                <input type="text" value={value} placeholder="Add Todo..." onChange={e=>setValue(e.target.value)}/>
          </form>
      )
}

function App(){
    const [todos,setTodos123]= useState([
        {
            text:'Learning React Hooks',
            isCompleted:false
        },
        {
            text:'Learning React Native',
            isCompleted:false
        },
        {
            text:'Learning NodeJS',
            isCompleted:true 
        }
    ]);

    //For TodoForm
    const addTodo=text=>{
        const NewTodos=[...todos,{text}];
        setTodos123(NewTodos);
    }
    //For Todo
    const completeTodo=index=>{
        const newTodos=[...todos];
        newTodos[index].isCompleted=true;
        setTodos123(newTodos);
    }
    //For Todo
    const deleteTodo=index=>{
        const newTodos=[...todos];
        newTodos.splice(index,1);
        setTodos123(newTodos);
    }

    return (
        //Map todos to state here
        <div>
            <div>
                {todos.map((todo,index)=>(
                    <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

export default App;