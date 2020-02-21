import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.secondary.dark};
  height: 60%;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: ${props => props.open ? '2' : '1'}
  
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: ${props => props.theme.secondary.light};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${props => props.theme.primary.regular};
    }
  }
`;