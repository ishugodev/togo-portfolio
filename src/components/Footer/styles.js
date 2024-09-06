import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    font-size: 1.6rem;

    margin-top: 4.8rem;
    margin-bottom: 6.4rem;
  
  strong {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.BROWN_700};
  }

  p {
    color: ${({ theme }) => theme.COLORS.BROWN_900};
    font-weight: 700;
  }

  @media (min-width: 768px) {
    strong {
      font-size: 3.2rem;
      font-weight: 900;
    }

    p {
      font-size: 3.2rem;
      font-weight: 700;
    }
  }
`;