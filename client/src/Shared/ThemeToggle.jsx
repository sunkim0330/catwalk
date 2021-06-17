import React, {useContext} from 'react';
import {Theme, themes} from '../App.jsx';
import {Switch, Checked, Container} from './styledComponents.js';

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

    <label class="label">
      <Container className="container">
        <Checked type="checkbox" name="check" value="check" />
        <Switch>
          {theme === themes.dark ? <i className='far fa-moon'></i> : <i className='far fa-sun'></i>}
        </Switch>
      </Container>
      <div>no more emails plz</div>
    </label>

  );
};