import React from 'react'
import "./Header.css"
function Header(props) {
  const {pressEnter} = props
  function handleEnter(e){
    if(e.keyCode === 13) {
      pressEnter(e.target.value)
      e.target.value=""
    } else {
      return 
    }
  }


  return (
    <div className="todo-header">
      <input onKeyUp={handleEnter} type="text" placeholder="請輸入代辦事項，並按Enter鍵確認"/>
    </div>
  )
}


export default Header