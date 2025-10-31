import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import ListFooter from './ListFooter'
import ButtonComponents from './ButtonComponents';

const ListContainer = (props) => {
  const [filter, setFilter] = useState("all");
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width])

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  })

  let completedTodos = props.completed;
  let todosToRender = props.todos;

  if (filter === "active") todosToRender = props.active;
  if (filter === "completed") todosToRender = props.completed;
  if (filter === "all") todosToRender = props.todos;

  useEffect(() => {
    props.changeList();
  }, [filter])

  return (
    <>
      <div className='list-container'>
        <div className='todos-container'>
          {todosToRender.map((todo, index) => <TodoList key={index} todo={todo} handleDelete={props.handleDelete} index={index} handleSelect={props.handleSelect} isCompleted={completedTodos.includes(todo)} />)}
        </div>
        <ListFooter filter={filter} count={props.count} changeList={setFilter} handleClear={props.handleClear} />
      </div>
      {isMobile ? <ButtonComponents filter={filter} handleClick={setFilter} isMobile={isMobile}/> : ''}
    </>
  )
}

export default ListContainer