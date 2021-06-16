import React, {useContext} from 'react';
import {Theme, themes} from '../App.jsx';

export const Toggle = (props) => {
  let theme = useContext(Theme);

  const setTheme = () => {
    if (theme === themes.light) {
      props.setCurrentTheme(themes.dark);
    } else {
      props.setCurrentTheme(themes.light);
    }
  };

  return (
    <div className='switch'>
      <input type='checkbox' onChange={setTheme}></input>
      <span className='slider round'>
        {theme === themes.dark ? <i className='far fa-moon'></i> : <i className='far fa-sun'></i>}
      </span>
    </div>
  );
};