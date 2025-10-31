import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = (props) => {
  return (
    <div className='header-container'>
        <h1 style={{color: 'hsl(236, 33%, 92%)'}}>TODO</h1>
        <ThemeSwitch changeTheme={props.changeTheme}/>
    </div>
  )
}

export default Header