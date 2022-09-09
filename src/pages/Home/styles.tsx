import styled from "styled-components";

export const Head = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--grey-2);
  > div {
    width: 48rem;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      button {
        width: 3.5rem;
        height: 2rem;
        background-color: var(--grey-3);
        color: var(--grey-0);
        border: none;
        border-radius: 4px;
        margin-left: 10px;
      }
    }
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const SectionInfo = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--grey-2);
  div {
    width: 48rem;
    height: 7.5rem;
    display: flex;
    align-items: center;
    color: var(--grey-0);
    p {
      margin-left: 10px;
    }
    span {
      margin-left: 35%;
    }

    button {
      display: flex;
      border-radius: 50%;
      border: none;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
      }
    }

    @media (max-width: 560px) {
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      button {
        display: none;
      }
    }
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const SectionTech = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .head-tech {
    width: 48rem;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    align-items: center;
    color: var(--grey-0);

    @media (max-width: 1024px) {
      width: 80%;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background: transparent;
    border: none;
    border-radius: 4px;
    color: var(--grey-0);
    width: 30px;
    height: 30px;
    background-color: var(--grey-3);
  }

  .content-tech {
    width: 48rem;
    height: 22.5rem;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border-radius: 8px;
    overflow-y: auto;
    box-shadow: ${({ theme }) => theme.boxShadow};

    @media (max-width: 1024px) {
      width: 80%;
    }
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: var(--grey-2);
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--grey-4);
      border-radius: 20px;
    }

    ul {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      li {
        margin-top: 15px;
        padding: 0 10px;
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--grey-4);
        border-radius: 4px;
        box-shadow: ${({ theme }) => theme.boxShadow};
      }
    }
  }
`;
