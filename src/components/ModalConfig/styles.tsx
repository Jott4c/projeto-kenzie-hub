import styled from "styled-components";

export const ContentForm = styled.div`
  width: 40rem;

  margin: 20px 20px;
  background-color: var(--grey-3);
  color: var(--grey-0);

  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: var(--grey-0);
    background-color: var(--grey-1);
    border-radius: 8px 8px 0 0;

    p {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      background: transparent;
      border: none;
      font-size: 20px;
      color: var(--grey-0);
      margin-right: 10px;
    }
  }
  .foto-perfil {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid var(--grey-0);
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      button {
        width: 5rem;
        height: 2rem;
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: none;
        border-radius: 4px;
        margin-top: 10px;
      }
    }
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }

  .form {
    .lines {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid var(--grey-0);
      div {
        display: flex;
        input {
          background: transparent;
          border: none;
          color: var(--grey-0);
          font-size: 16px;
        }
      }
      button {
        background: transparent;
        border: none;
        color: var(--grey-0);
        margin-left: 20px;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: var(--grey-2);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grey-4);
    border-radius: 10px;
  }
`;
