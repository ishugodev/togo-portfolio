import styled from "styled-components";

export const Container = styled.header`
  font-family: 'Titan One', sans-serif;
  font-size: 2rem;
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -2.4rem;
    z-index: 2;

    width: 100%;
    height: 4rem;

    background: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};
  }

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
    cursor: pointer;
  }
`;

export const MainBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  position: relative;
  z-index: 2;
  
  padding: 2rem;
  
  background: ${({ theme }) => theme.COLORS.BROWN_700};
  
  border-radius: 1.5rem;

  ul {
    display: flex;
    gap: 8rem;

    color: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};

    list-style: none;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }

  @media (min-width: 769px) {
    button {
      display: none;
    }
  }  
`;

export const MenuBar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    text-align: end;
  }
  
  @media (max-width: 768px) {
    position: absolute;
    top: 5rem;
    z-index: 1;
    
    width: 100%;
    
    ul {
      flex-direction: column;
      gap: 1.6rem;
      top: 4rem;
      right: 0;
      
      padding: 2rem;
      
      background: ${({ theme }) => theme.COLORS.BROWN_700};
      
      border-radius: 0 0 1.5rem 1.5rem;

      visibility: hidden;
      transform: translateY(-8rem);
      transition: .4s ease-in-out;
    }

    li a {
      color: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};
      transition: .15s .3s ease-in;

    }
    
    ul:not(.actived) li a {
      opacity: 0;
    }

    .actived {
      visibility: visible;
      transform: translateY(0);
    }
  }
`;