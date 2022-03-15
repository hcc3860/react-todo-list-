import React, {useEffect, useRef} from 'react'
import "./List.css"
import Item from "../Item/Item.js"

function List(props) {
  const {todos, changeDone, deleteTodo, controlAllCheck} = props;
  const defaultText = useRef()
  
  // useEffect(()=>{
  //   if(todos.length === 0) {
  //     defaultText.current.innerHTML = "目前沒有代辦事項"
  //   } else {
  //     defaultText.current.innerHTML += todos.map(function(todo){
  //       return <Item changeDone={changeDone} key={todo.id} id={todo.id} task={todo.task} done={todo.done} deleteTodo={deleteTodo} controlAllCheck={controlAllCheck}/>
  //     })
  //   }
  // },[todos.length])

  return (
    <ul ref={defaultText} className="todo-main">
      {
        
        todos.map(function(todo){
          return <Item changeDone={changeDone} key={todo.id} id={todo.id} task={todo.task} done={todo.done} deleteTodo={deleteTodo} controlAllCheck={controlAllCheck}/>
        })
      }
      
    </ul>
  )
}


export default List