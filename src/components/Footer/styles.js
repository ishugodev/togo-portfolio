import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    font-size: 1.6rem;

    margin-top: 8rem;
    margin-bottom: 3.2rem;
  
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
    margin-top: 16rem;
    margin-bottom: 8rem;

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