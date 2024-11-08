import styled from "styled-components";

export const Container = styled.a`
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
  
  .image-wrapper {
    display: flex;

    width: 100%;
    min-height: 21rem;

    overflow: hidden;

    border-radius: 1rem;
  }
  
  img {
    width: 100%;
    max-height: 30rem;
    object-fit: cover;

    transition: 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;
  }

  .text div {
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

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 3.2rem;

    min-width: 70rem;

    padding: 3.2rem;

    .image-wrapper {
      max-width: 100%;
    }
  }
`;