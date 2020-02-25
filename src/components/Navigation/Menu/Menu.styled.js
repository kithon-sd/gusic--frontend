import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.secondary.regular};
  height: 100vh;
  width: 100%;
  text-align: left;
  position: ${props => props.open ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: ${props => props.open ? '2' : '1'};
  
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    margin: 0;
    font-weight: bold;
    color: ${props => props.theme.primary.regular};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover,
    &:focus {
      background: ${props => props.theme.primary.regular};
      color: ${props => props.theme.secondary.regular}
    }
  }
`;