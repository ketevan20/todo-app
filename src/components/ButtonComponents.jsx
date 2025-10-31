import React from 'react'

const ButtonComponents = (props) => {
  const stored = localStorage.getItem('isDark');
  const isDark = stored ? JSON.parse(stored) : true;

  return (
    <div className={`footer-buttons ${props.isMobile ? `buttons-mobile ${isDark ? '' : 'light'}` : ''}`}>
        <small style={props.filter==="all" ? {color: 'hsl(220, 98%, 61%)'} : {}} onClick={() => props.handleClick('all')}>All</small>
        <small style={props.filter==="active" ? {color: 'hsl(220, 98%, 61%)'} : {}} onClick={() => props.handleClick('active')}>Active</small>
        <small style={props.filter==="completed" ? {color: 'hsl(220, 98%, 61%)'} : {}} onClick={() => props.handleClick('completed')}>Completed</small>
    </div>
  )
}

export default ButtonComponents