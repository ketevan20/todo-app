import React from 'react'

const TodoList = (props) => {
  let isCompleted = props.isCompleted;

  function HandleDelete() {
    props.handleDelete(props.todo);
  }

  function HandleSelect() {
    props.handleSelect(props.todo);
  }

  return (
    <div className='todo'>
      <div className='todo-content'>

        <button
          className={`circle button-circle${isCompleted ? ' checked' : ''}`}
          onClick={HandleSelect}
        >
          {isCompleted ? <img src='./images/icon-check.svg'/> : ''}
        </button>

        <p className={isCompleted ? 'completed' : ''}>{props.todo}</p>
      </div>
      <img
        className='cross-img'
        src="./images/icon-cross.svg"
        onClick={HandleDelete}
      />
    </div>
  )
}

export default TodoList