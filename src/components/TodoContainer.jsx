import React, { useEffect, useState } from 'react'
import Header from './Header';
import { AddTodo } from './AddTodo';
import ListContainer from './ListContainer';
import Footer from './Footer';

const TodoContainer = () => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const stored = localStorage.getItem('isDark');
    return stored ? JSON.parse(stored) : true;
  });

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [active, setActive] = useState(JSON.parse(localStorage.getItem('active')) || []);
  const [completed, setCompleted] = useState(JSON.parse(localStorage.getItem('completed')) || []);
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);


  useEffect(() => {
    ThemeSwitch();
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('active', JSON.stringify(active));
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [todos, active, completed, count, darkTheme]);

  function ChangeTheme() {
    setDarkTheme(!darkTheme);
    ThemeSwitch();
  }

  function ThemeSwitch() {
    if (darkTheme === false) {
        document.querySelectorAll('.todo').forEach(todo =>
          todo.classList.add('light')
        );
        document.querySelectorAll('.todo-content').forEach(todo =>
          todo.classList.add('light')
        );
        document.querySelectorAll('.completed').forEach(todo =>
          todo.classList.add('light')
        );
      } else {
        document.querySelectorAll('.todo').forEach(todo =>
          todo.classList.remove('light')
        );
        document.querySelectorAll('.todo-content').forEach(todo =>
          todo.classList.remove('light')
        );
        document.querySelectorAll('.completed').forEach(todo =>
          todo.classList.remove('light')
        );
      }
  }

  function AddTodoToTheList(todo) {
    if (!todos.includes(todo)) {
      setTodos(prevItems => prevItems.concat(todo));
      setActive(prevItems => prevItems.concat(todo));
      setCount(count + 1);
      ThemeSwitch();
    } else {
      alert("Todo is already in the list");
    }
  }

  function DeleteToDo(todo) {
    const newTodos = todos.filter((item, i) => i !== todos.indexOf(todo));
    setTodos(newTodos);
    setCount(count - 1);

    if (active.includes(todo)) {
      const newActive = active.filter((item, i) => i !== active.indexOf(todo))
      setActive(newActive);
    } else if (completed.includes(todo)) {
      const newCompleted = completed.filter((item, i) => i !== completed.indexOf(todo))
      setCompleted(newCompleted);
    }
  }

  function HandleSelect(item) {
    if (active.includes(item)) {
      setCompleted(prev => [...prev, item]);
      setActive(prev => prev.filter(todo => todo !== item));
    } else {
      setActive(prev => [...prev, item]);
      setCompleted(prev => prev.filter(todo => todo !== item));
    }
    ThemeSwitch();
  }

  function HandleClear() {
    setCount(count - completed.length);
    const newTodos = todos.filter((item, index) => !completed.includes(item));
    setTodos(newTodos);
    setCompleted([]);
    setActive(newTodos);
  }

  return (
    <div className='main-container'>
      <Header changeTheme={ChangeTheme} />
      <AddTodo handleInput={AddTodoToTheList} />
      <ListContainer changeList={ThemeSwitch} todos={todos} handleDelete={DeleteToDo} count={count} handleSelect={HandleSelect} completed={completed} active={active} handleClear={HandleClear} />
      <Footer />
    </div>
  )
}

export default TodoContainer