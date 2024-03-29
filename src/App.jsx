import React,{ useState } from 'react'
// import App.css from './App.css'

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

  function AddTodo(){
    // setTodo[todo.push({
    //   id:4,
    //   title: "Now how to demean bot",
    //   description: "Will think about it later",
    // })]
    setTodo([...todo,{// this is to push into the array without using the loop ... basically spreads the array 
      id:counter++,
      title: "Read a book",
      description: "Spend some time reading a book you've been meaning to get to. Choose a novel, a non-fiction book, or whatever interests you at the moment."
    },])
  }


  return (
    <>
    <button className='btn' onClick={AddTodo}>Click me to update a Todo</button>
     {todo.map(todo =><CreateTodo key={todo.id}
     title= {todo.title} 
     description={todo.description} 
     />)}
    </>
  )
}
function CreateTodo({title,description}){
  return<>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </> 
}

export default App
