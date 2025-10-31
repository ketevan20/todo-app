import React, { useEffect, useState } from 'react';

const ThemeSwitch = (props) => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('isDark');
    return stored ? JSON.parse(stored) : true;
  });

  const [img, setImg] = useState(isDark ? './images/icon-sun.svg' : './images/icon-moon.svg');

  useEffect(() => {
    // Apply correct theme on initial render
    applyTheme(isDark);
  }, []);

  function applyTheme(darkMode) {
    localStorage.setItem('isDark', JSON.stringify(darkMode));
    setImg(darkMode ? './images/icon-sun.svg' : './images/icon-moon.svg');

    const method = darkMode ? 'remove' : 'add'; // if light mode, add "light"
    document.body.classList[method]('light');
    document.querySelector('.add-todo-container')?.classList[method]('light');
    document.querySelector('.list-container')?.classList[method]('light');
    document.querySelector('.circle')?.classList[method]('light');
    document.querySelector('.add-todo-container input')?.classList[method]('light');
    document.querySelector('.todos-container')?.classList[method]('light');
    document.querySelector('.footer-text')?.classList[method]('light');
    document.querySelectorAll('.footer-buttons small').forEach(btn =>
      btn.classList[method]('light')
    );
    document.querySelector('.clear-completed')?.classList[method]('light');
  }

  function handleSwitch() {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
  }

  return (
    <div>
      <img
        style={{ cursor: 'pointer' }}
        src={img}
        alt="theme switch"
        onClick={() => {
          handleSwitch();
          props.changeTheme();
        }}
      />
    </div>
  );
};

export default ThemeSwitch;
