import React, { useEffect, useState } from 'react'

export const AddTodo = (props) => {
  const [input, setInput] = useState('');

  return (
    <div className='add-todo-container'>
      <div className='circle'></div>
      <input
        type='text'
        placeholder='Create a new todo...'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && input.trim()) {
            props.handleInput(input.trim());
            setInput('');
          }
        }}
      />
    </div>
  )
}
