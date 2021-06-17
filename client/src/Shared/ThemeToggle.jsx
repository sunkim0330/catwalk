import React, {useContext} from 'react';
import {Theme, themes} from '../App.jsx';
import {Switch, Checked, Container, Label, ThemeIcon} from './styledComponents.js';

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
      <Container className="toggle" shadow={theme.containerShadow}>
        <Checked className="toggle-state" type="checkbox" name="check" value="check" onChange={setTheme}/>
        <Switch className="indicator" shadow={theme.toggleShadow} background={theme.toggleColor}>
        </Switch>
      </Container>
      {theme === themes.dark ? <ThemeIcon className='far fa-moon fa-lg' color={theme.color}></ThemeIcon> : <ThemeIcon className='far fa-sun fa-lg' color={theme.color}></ThemeIcon>}
    </Label>
  );
};

// label
// toggle = container
// togg-state = checked
// indicator = switch

