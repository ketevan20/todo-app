import React, { useEffect, useState } from 'react'
import ButtonComponents from './ButtonComponents';

const ListFooter = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(width <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width])
  
  window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
  })

  function HandleClick(value) {
    props.changeList(value);
  }

  function HandleClear() {
    props.handleClear();
  }

  return (
    <div className='list-footer-container'>
      <small><span>{props.count}</span> items left</small>
      {!isMobile ? <ButtonComponents isMobile={isMobile} filter={props.filter} handleClick={HandleClick}/> : ''}
      <small className='clear-completed' onClick={HandleClear}>Clear Completed</small>
    </div>
  )
}

export default ListFooter