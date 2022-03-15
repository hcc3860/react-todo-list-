import React, {useState} from "react"
import { nanoid }  from "nanoid"
import './App.css';
import Header from "./components/Header/Header.js"
import List from "./components/List/List.js"
import Footer from "./components/Footer/Footer.js"

function App() {
  const [todos, setTodos] = useState([
    // {id: "001", task: "寫程式", done: false},
    // {id: "002", task: "練習程式", done: false},
  ])

  function pressEnter(singleTodo){
    setTodos([{id: nanoid(), task: singleTodo, done: false }, ...todos])
  }

  function changeDone(condition, id){
    const newTodo = todos.map((todo)=>{
      if(todo.id === id) {
        todo.done = condition
      }
      return todo
    })
    setTodos([...newTodo])
  }

  function deleteTodo(id){
    const newTodo = todos.filter((todo)=>{
      return todo.id !== id
    })  
    setTodos([...newTodo])
  }

  function countTask(){
    return todos.length
  }

  function countFinishTask(){
    const finishTask = todos.filter((todo)=> {
      return todo.done === true
    })
    return finishTask.length
  } 

  function changeAllDone(conditionAll){
    const newTodo = todos.map((todo)=>{
      todo.done = conditionAll
      return todo
    })
    setTodos([...newTodo])
  }

  function deleteComplete(){
    const newTodo = todos.filter((todo)=>{
      return todo.done !== true
    })
    setTodos([...newTodo])
  }

  return (
    <div className="todo-container">
      <div className='todo-wrap'>
        <Header pressEnter={pressEnter}/>    
        <List todos={todos} changeDone={changeDone} deleteTodo={deleteTodo} />
        <Footer countTask={countTask} countFinishTask={countFinishTask} changeAllDone={changeAllDone} deleteComplete={deleteComplete} />   
      </div>
    </div>
  );
}

export default App;
