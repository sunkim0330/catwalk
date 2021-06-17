import React, {useContext} from 'react';
import {Theme, themes} from '../App.jsx';
import {Switch, Checked, Container, Label} from './styledComponents.js';

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

    <Label className="label">
      <Container className="toggle">
        <Checked className="toggle-state" type="checkbox" name="check" value="check" onChange={setTheme}/>
        <Switch className="indicator">
        </Switch>
      </Container>
      {theme === themes.dark ? <i className='far fa-moon'></i> : <i className='far fa-sun'></i>}
    </Label>

  );
};

// label
// toggle = container
// togg-state = checked
// indicator = switch

