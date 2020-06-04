
React Hooks allow for functional components to have a state and utilize lifecycle methods

~~~
function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  // we'll render our todos here ...
  // return <div></div>
}
~~~

The first parameter, todos is what we are going to name our state.
The first variable is the value. Similar to this.state

The second parameter, setTodos is what we are going to use to set the state.
The second variable is a function to update that value. Similar to this.setState

React Hooks are great, it allow for more straight-forward way of coding and can make my code more clear and concise