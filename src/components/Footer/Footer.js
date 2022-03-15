import React, {useRef, useEffect} from 'react'
import "./Footer.css"
function Footer(props) {
  const{countTask, countFinishTask, changeAllDone, deleteComplete} = props
  const allTickRef = useRef() 

  const handleCountTask = countTask()
  const handleCountFinishTask = countFinishTask()

  // useEffect(()=>{
  //   if(handleCountTask === 0) {
  //     allTickRef.current.checked = false
  //   } 
  // },[])
  
  useEffect(()=>{

    if(handleCountFinishTask !== handleCountTask) {
      allTickRef.current.checked = false
      allTickRef.current.disabled = false

    } else if(handleCountTask === 0) {
      allTickRef.current.checked = false
      allTickRef.current.disabled = true

    } else if(handleCountFinishTask !== 0 || handleCountFinishTask === handleCountTask) {
      allTickRef.current.checked = true
      allTickRef.current.disabled = false
    } 

    // if(handleCountFinishTask === handleCountTask) {
    //   allTickRef.current.checked = true
    // } else{
    //   allTickRef.current.checked = false
    // }
  },[handleCountTask, handleCountFinishTask])

  function handleAllCheck(e){
    changeAllDone(e.target.checked)
  }

  function handleAllClear(){
    deleteComplete()
  }

  return (
    <div className="todo-footer">
      <label>
        <input ref={allTickRef} onChange={handleAllCheck} defaultChecked={false} type="checkbox"/>
      </label>
      <span>
        <span>已完成{handleCountFinishTask}</span> / 全部{handleCountTask}
      </span>
      <button onClick={handleAllClear} className="btn btn-danger">清除已完成任务</button>
    </div>
  )
}


export default Footer