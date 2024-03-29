import React,{ useState } from 'react'
import './App.css'

let counter =4;
function App() {
  const [todo, setTodo]=useState([{
    id: 1,
    title : "Buy groceries",
    description: "Buy milk, eggs, bread, and vegetables from the grocery store."
  },{
    id: 2,
    title: "Finish React project",
    description: "Complete the remaining tasks for the React project, including styling and testing."
  },{
    id:3,
    title: "Go for a run",
    description: "Take a jog in the park for 30 minutes to get some exercise and fresh air."
  }])
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  function AddTodo(){
    setTodo([...todo,{
      id:counter++,
      title: "Read a book",
      description: "Spend some time reading a book you've been meaning to get to. Choose a novel, a non-fiction book, or whatever interests you at the moment."
    },])
  }

  return (
    <div id="dark" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button className='toggle-button' onClick={toggleDarkMode}>
        {darkMode ? <i className="material-icons">brightness_7</i> : <i className="material-icons">brightness_4</i>}
      </button>
      <button className='update-button' onClick={AddTodo}>Click me to update a Todo</button>
      {todo.map(item => (
        <CreateTodo 
          key={item.id}
          title={item.title} 
          description={item.description} 
        />
      ))}
    </div>
  );
}
function CreateTodo({title,description}){
  return<>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </> 
}

export default App
