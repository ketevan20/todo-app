import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import ListFooter from './ListFooter'

const ListContainer = (props) => {
  const [filter, setFilter] = useState("all");

  let completedTodos = props.completed;
  let todosToRender = props.todos;

  if(filter === "active") todosToRender = props.active;
  if(filter === "completed") todosToRender = props.completed;
  if(filter === "all") todosToRender = props.todos;

  useEffect(() => {
    props.changeList();
  }, [filter])

  return (
    <div className='list-container'>
      <div className='todos-container'>
        {todosToRender.map((todo, index) => <TodoList key={index} todo={todo} handleDelete={props.handleDelete} index={index} handleSelect={props.handleSelect} isCompleted={completedTodos.includes(todo)}/>)}
      </div>
      <ListFooter filter={filter} count={props.count} changeList={setFilter} handleClear={props.handleClear}/>
    </div>
  )
}

export default ListContainer