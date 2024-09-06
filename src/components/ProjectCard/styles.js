import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  min-width: 28rem;

  background: ${({ theme }) => theme.COLORS.BROWN_700};
  color: ${({ theme }) => theme.COLORS.BG_LIGHT_BROWN};

  text-decoration: none;
  
  padding: 1.6rem;
  
  border-radius: 1.5rem;

  cursor: pointer;
  
  img {
    width: 100%;
    height: 21rem;
    object-fit: cover;
    object-position: center center;
    border-radius: 1rem;
  }

  .description {
    display: grid;
    gap: 1.6rem;
  }

  strong {
    font-size: 2rem;
  }
  
  p {
    display: block;
    color: ${({ theme }) => theme.COLORS.BG_LIGHT_BROWN};
    font-size: 1.4rem;
    font-weight: 400;
  }

  .click-here {
    display: flex;
    align-items: center;
    gap: .4rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3.2rem;

    min-width: 70rem;

    padding: 3.2rem;

    img {
      max-width: 30rem;
    }
  }
`;