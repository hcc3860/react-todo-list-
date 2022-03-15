import React, {useRef, useEffect} from 'react'
import "./Item.css"

function Item(props) {
  const {id, task, done, changeDone,deleteTodo} = props
  const eachTask = useRef()

  function handleCheck(e){
    changeDone(e.target.checked, id)
  }

  function handleDelete(){
    deleteTodo(id)
  }

  useEffect(()=>{
    eachTask.current.checked = done
  },[done])

  return (
    <li>
      <label>
        <input ref={eachTask} onChange={handleCheck} type="checkbox" defaultChecked={done} />
        <span>{task}</span>
      </label>
      <button onClick={handleDelete} className="btn btn-danger">删除</button>
    </li>
  )
}

export default Item