import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    margin-top: 1.6rem;   
  }
  
  header, #intro, h3, .see-all, #contacts, footer {
    margin-inline: 1.6rem;
  }

  #intro {
    margin-top: 5.6rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 800;

    margin-bottom: 1.6rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 800;

    margin-bottom: 2.4rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  #intro p {
    color: ${({ theme }) => theme.COLORS.BROWN_200};
    font-weight: 600;

    margin-bottom: 3.2rem;
  }

  .stacks-wrapper {
    display: flex;
    gap: .8rem;
    justify-content: center;

    margin-bottom: 4rem;
  }

  button.contact {
    width: 100%;
    height: 6.4rem;

    background: ${({ theme }) => theme.COLORS.BG_LIGHT_BROWN};

    font-size: 2rem;
    font-weight: 700;

    border: 3px solid ${({ theme }) => theme.COLORS.BROWN_700};
    border-radius: 7.7rem;

    cursor: pointer;
  }

  #pinned-projects, #contacts {
    margin-top: 8rem;
  }

  .projects-wrapper {
    display: flex;
    gap: 1.6rem;
    
    overflow-x: auto;

    margin-top: 4rem;

    &::-webkit-scrollbar {
      width: 1.6rem;
    }
      
    &::-webkit-scrollbar-track {
      margin: 1.2rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.BROWN_700};
      background-clip: padding-box;

      border: .6rem solid transparent;
      border-radius: 10px;
    }
  }

  .projects-wrapper::before {
    position: absolute;
    left: 0;
    content: "";
    height: 100%;
    width: 1.6rem;
    background: linear-gradient(to right, #EBE5A680, transparent);
  }
  
  .projects-wrapper::after {
    position: absolute;
    right: 0;
    content: "";
    height: 100%;
    width: 1.6rem;
    background: linear-gradient(to left, #EBE5A680, transparent);
  }

  .projects-wrapper a:first-child {
    margin-left: 1.6rem;
  }

  .projects-wrapper a:last-child {
    margin-right: 1.6rem;
  }

  a.see-all {
    display: inline-block;

    color: ${({ theme }) => theme.COLORS.BROWN_200};
    font-weight: 600;
    text-decoration: none;

    margin-top: 4rem;
  }
  
  a.see-all span {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    color: ${({ theme }) => theme.COLORS.BROWN_900};
  }

  .contact-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 4rem;
  }

  @media (min-width: 768px) {
    align-items: center;

    header {
      margin-top: 2.4rem;
      width: calc(100% - 8rem);
    }
    
    header, #intro, h3, .see-all, #contacts, footer {
      max-width: 108rem;
      margin-inline: 4rem;
    }

    #intro {
      margin-top: 5.6rem;
    }

    h1 {
      font-size: 6.4rem;
      font-weight: 800;

      margin-bottom: 1.6rem;
    }

    h2 {
      font-size: 4rem;
      font-weight: 800;

      margin-bottom: 2.4rem;
    }

    h3 {
      font-size: 4rem;
    }

    h4 {
      font-size: 4rem;
    }

    #intro p {
      font-size: 2rem;
    }

    .stacks-wrapper {
      display: flex;
      gap: .8rem;
      justify-content: start;

      margin-bottom: 4rem;
    }

    #intro .contact {
      max-width: 35.8rem;
    }
    
    #pinned-projects {
      width: 100%;
      max-width: 116rem;
    }

    .projects-wrapper {
      gap: 3.2rem;

      overflow-x: auto;

      margin-top: 4rem;

      &::-webkit-scrollbar {
        width: 1.6rem;
      }
        
      &::-webkit-scrollbar-track {
        margin: 3.2rem;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.BROWN_700};
        background-clip: padding-box;

        border: .6rem solid transparent;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.COLORS.BROWN_900};
        background-clip: padding-box;

        border: .6rem solid transparent;
      }
    }

    #pinned-projects {
      position: relative;
    }

    .projects-wrapper::before {
      position: absolute;
      left: -2px;
      content: "";
      height: 100%;
      width: 4rem;
      background: linear-gradient(to right, #EBE5A6, transparent);
    }
    
    .projects-wrapper::after {
      position: absolute;
      right: -2px;
      content: "";
      height: 100%;
      width: 4rem;
      background: linear-gradient(to left, #EBE5A6, transparent);
    }

    .projects-wrapper a:first-child {
      margin-left: 4rem;
    }

    .projects-wrapper a:last-child {
      margin-right: 4rem;
    }

    #contacts {
      width: calc(100% - 8rem);
    }

    .contact-wrapper {
      justify-content: start;
      gap: 2.4rem;

      margin-top: 6.4rem;
    }
  }
`;