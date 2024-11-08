import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  padding: 3.2rem 4.8rem 4.8rem;

  background: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};

  border-radius: 2rem;

  z-index: 10;

  button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    background: none;
    border: none;

    width: 3.2rem;
    height: 3.2rem;

    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.COLORS.BLUR_BLACK};

  width: 100vw;
  height: 100vh;

  z-index: 9;
`;