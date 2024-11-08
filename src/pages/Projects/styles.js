import styled, { keyframes } from "styled-components";

const fadeInH1 = keyframes`
  from {
    transform: translateX(-8rem);
  }
  to {
    opacity: 1;
  }
`;

const header = keyframes`
  from {
    transform: translate(0rem);
  }
`;

const fadeInProjects = keyframes`
  from {
    transform: translateY(5rem);
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    margin-top: 1.6rem;
    z-index: 1;

    animation: ${header} 0.0s ease-in-out forwards;
  }

  header, h1, .projects-wrapper, footer {
    margin-inline: 1.6rem;
  }

  h1 {
    display: block;
    
    font-size: 2.4rem;
    text-align: start;

    margin-top: 5.6rem;
    
    opacity: 0;
    animation: ${fadeInH1} 0.6s ease-in-out forwards;
  }
  
  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    gap: 1.6rem;

    margin-top: 4rem;

    opacity: 0;
    animation: ${fadeInProjects} 0.6s 0.3s ease-in-out forwards;
  }

  .projects-wrapper a {
    flex-direction: column;
    gap: 1.6rem;

    max-width: 100%;

    padding: 1.6rem;
  }

  @media (min-width: 769px) {
    align-items: center;

    header {
      margin-top: 2.4rem;
    }

    header, h1, .projects-wrapper, footer {
      max-width: 108rem;
      margin-inline: 4rem;
      width: calc(100% - 8rem);
    }

    h1 {
      font-size: 4rem;
    }

    .projects-wrapper {
      gap: 2.4rem;
    }
    
    .projects-wrapper a {
      min-width: 32rem;

      img {
        max-width: 100%;
      }
    }
  }
`;