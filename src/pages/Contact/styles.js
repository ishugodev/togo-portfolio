import styled, { keyframes } from "styled-components";

const fadeInX = keyframes`
  from {
    transform: translateX(-8rem);
  }
  to {
    opacity: 1;
  }
`;

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  header {
    margin-top: 1.6rem;
  }
  
  header, h1, .p, .contacts-wrapper, footer {
    margin-inline: 1.6rem;
  }

  header::before {
    top: 0;
  }

  h1 {
    width: 100%;
    font-size: 2.4rem;
    margin-top: 5.6rem;

    opacity: 0;
    animation: ${fadeInX} 0.6s ease-in-out forwards;
  }

  .p {
    margin-top: 2.4rem;
    
    opacity: 0;
    animation: ${fadeInX} 0.6s 0.3s ease-in-out forwards;
  }

  .contacts-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 5.6rem;

    * {
      transform: scale(0);
    }

    *:nth-child(1) {
      animation: ${scale} 0.2s 0.6s forwards ease-in-out;
    }
    *:nth-child(2) {
      animation: ${scale} 0.2s 0.8s forwards ease-in-out;
    }
    *:nth-child(3) {
      animation: ${scale} 0.2s 1s forwards ease-in-out;
    }
    *:nth-child(4) {
      animation: ${scale} 0.2s 1.2s forwards ease-in-out;
    }
  }

  @media (max-width: 768px) {
    header ul {
      width: calc(100% - 3.2rem);
      margin-top: 1.6rem;
    }
  }

  @media (min-width: 769px) {
    align-items: center;
    
    header {
      margin-top: 2.4rem;
    }

    header, h1, .p, .contacts-wrapper, footer {
      margin-inline: 1.6rem;
      max-width: 108rem;
      width: calc(100% - 8rem);
    }

    h1 {
      display: block;

      font-size: 4rem;
      margin-top: 8rem;
    }

    .p {
      font-size: 2rem;
      margin-top: 6.4rem;
    }

    .contacts-wrapper {
      justify-content: start;
      margin-top: 10rem;
    }
  }
`;