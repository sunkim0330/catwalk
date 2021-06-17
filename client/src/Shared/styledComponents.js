import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin: auto;
  font-family: sans-serif;
  width: 80%;
`;

export const Switch = styled.div`
  height: 100%;
  width: 200%;
  background: ${props => props.background};
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: ${props => props.shadow};
`;
// toggle
export const Container = styled.div`
margin-right: 15px;
isolation: isolate;
position: relative;
height: 30px;
width: 60px;
border-radius: 15px;
overflow: hidden;
box-shadow: ${props => props.shadow};
`;
// toggle-state
export const Checked = styled.input`
display: none;
:checked ~ ${Switch} {
  transform: translate3d(25%, 0, 0);
}
`;
export const Label = styled.label`
  margin-left: 80%;
  margin-top: -20px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394a56;
`;

export const ThemeIcon = styled.i`
  color: ${props => props.color};
  transition: all .6s;
`;
