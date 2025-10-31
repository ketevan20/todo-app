import React from 'react'

const ListFooter = (props) => {
  
  function HandleClick(value) {
    props.changeList(value);
  }

  function HandleClear() {
    props.handleClear();
  }

  return (
    <div className='list-footer-container'>
      <small><span>{props.count}</span> items left</small>
      <div className='footer-buttons'>
        <small style={props.filter==="all" ? {color: 'hsl(220, 98%, 61%)'} : {}} onClick={() => HandleClick('all')}>All</small>
        <small style={props.filter==="active" ? {color: 'hsl(220, 98%, 61%)'} : {}} onClick={() => HandleClick('active')}>Active</small>
        <small style={props.filter==="completed" ? {color: 'hsl(220, 98%, 61%)'} : {}} onClick={() => HandleClick('completed')}>Completed</small>
      </div>
      <small className='clear-completed' onClick={HandleClear}>Clear Completed</small>
    </div>
  )
}

export default ListFooter