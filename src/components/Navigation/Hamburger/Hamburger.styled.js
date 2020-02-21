import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  margin-left: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3rem;
   background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({open, theme}) => open ? theme.secondary.regular : theme.primary.regular};
    background-color: ${props => props.theme.primary.regular}
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;