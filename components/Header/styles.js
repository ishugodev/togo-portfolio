import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  isolation: isolate;

  padding: 2rem;

  background: ${({ theme }) => theme.COLORS.BROWN_700};
  
  font-family: 'Titan One', sans-serif;
  font-size: 2rem;

  border-radius: 1.5rem;

  svg {
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};
  }
  
  a {
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};
    text-decoration: none;
    display: inline-block;
  }
  
  button {
    background: none;
    border: none;
  }

  nav {
    display: inline-flex;
    align-items: end;
  }

  ul {
    list-style: none;
    text-align: end;
  }

  .menu {
    display: flex;
  }
  
  @media (max-width: 768px) {
    .menu {
      flex-direction: column;
      gap: 1.6rem;
      position: absolute;
      top: 4rem;
      right: 0;
      
      width: 100%;

      padding: 2rem;
      
      background: ${({ theme }) => theme.COLORS.BROWN_700};
      
      border-radius: 0 0 1.5rem 1.5rem;

      z-index: -1;
      
      visibility: hidden;
      opacity: 0;
      transform: translateY(-4rem);
      transition: .3s ease-in-out;
      
    }
    
    .menu-active {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 769px) {
    button {
      display: none;
    }

    .menu {
      display: flex;
      align-items: end;
      gap: 8rem;
  }
  }
`;