import styled, {keyframes} from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin: auto;
  font-family: sans-serif;
  width: 80%;
`;

// indicator
export const Switch = styled.div`
  height: 100%;
  width: 200%;
  background: #ecf0f3;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow:
    -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6;

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
box-shadow:
-8px -4px 8px 0px #ffffff,
8px 4px 12px 0px #d1d9e6,
4px 4px 4px 0px #d1d9e6 inset,
-4px -4px 4px 0px #ffffff inset;


`;

// toggle-state
export const Checked = styled.input`
display: none;

:checked ~ ${Switch} {
  transform: translate3d(25%, 0, 0);
}
`;


export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394a56;
`;