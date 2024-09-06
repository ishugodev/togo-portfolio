import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1.6rem;

  header {
    width: 100%;
  }

  h1 {
    display: block;
    
    width: 100%;
    
    font-size: 2.4rem;
    text-align: start;

    margin-top: 5.6rem;
  }
  
  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    gap: 1.6rem;

    margin-top: 4rem;
  }

  article {
    flex-direction: column;
    gap: 1.6rem;
    padding: 1.6rem;
  }

  @media (min-width: 768px) {
    margin: 2.4rem 4rem;

    header {
      width: 100%;
    }

    header, h1, .projects-wrapper, footer {
      max-width: 108rem;
      margin-inline: 4rem;
    }

    .projects-wrapper {
      gap: 2.4rem;
      
      width: 100%;
    }
    
    article {
      min-width: 32rem;

      img {
        max-width: 100%;
      }
    }
  }
`;