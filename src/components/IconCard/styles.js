import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${({ size }) => `${size?.lg}rem`};
  height: ${({ size }) => `${size?.lg}rem`};
  border-radius: ${({ $border }) => `${$border?.lg}rem`};
  
  background: ${({ theme }) => theme.COLORS.BROWN_700};
  color: ${({ theme }) => theme.COLORS.BG_LIGHT_YELLOW};
  
  font-size: ${({ $fontSize }) => `${$fontSize?.lg}rem`};
  font-weight: 700;
  text-decoration: none;

  cursor: ${({ to }) => (to ? 'pointer' : 'default')};

  img {
    width: ${({ $child_size }) => `${$child_size?.lg}rem`};
    height: ${({ $child_size }) => `${$child_size?.lg}rem`};
  }

  svg {
    width: ${({ $child_size }) => `${$child_size?.lg}rem`};
    height: ${({ $child_size }) => `${$child_size?.lg}rem`};
  }

  @media (max-width: 768px) {
    width: ${({ size }) => `${size?.sm}rem`};
    height: ${({ size }) => `${size?.sm}rem`};
    border-radius: ${({ $border }) => `${$border?.sm}rem`};

    font-size: ${({ $fontSize }) => `${$fontSize?.sm}rem`};

    img {
      width: ${({ $child_size }) => `${$child_size?.sm}rem`};
      height: ${({ $child_size }) => `${$child_size?.sm}rem`};
    }

    svg {
      width: ${({ $child_size }) => `${$child_size?.sm}rem`};
      height: ${({ $child_size }) => `${$child_size?.sm}rem`};
  }
  }
`;

export const ChildElement = styled.div`
  width: ${({ $child_size }) => `${$child_size?.lg}rem`};
  height: ${({ $child_size }) => `${$child_size?.lg}rem`};

  @media (max-width: 768px) {
    width: ${({ $child_size }) => `${$child_size?.sm}rem`};
    height: ${({ $child_size }) => `${$child_size?.sm}rem`};
  }
`;