import styled from "styled-components";

export const Container = styled.div`
  margin: 1.6rem;

  h1 {
    font-size: 2.4rem;
    margin-top: 5.6rem;
  }

  p {
    margin-top: 2.4rem;
  }

  .contacts-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 5.6rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 2.4rem 4rem;

    header {
      width: 100%;
      max-width: 108rem;
    }

    h1, p, .contacts-wrapper {
      max-width: 108rem;
    }

    h1 {
      display: block;
      width: 100%;

      font-size: 4rem;
      margin-top: 8rem;
    }

    p {
      font-size: 2rem;
      margin-top: 6.4rem;
    }

    .contacts-wrapper {
      justify-content: start;
      margin-top: 10rem;
    }
  }
`;