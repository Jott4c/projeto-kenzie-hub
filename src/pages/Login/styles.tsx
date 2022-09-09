import styled from "styled-components";

export const ContentForm = styled.div`
  width: 23rem;
  height: 31rem;
  background-color: var(--grey-3);
  color: var(--grey-0);
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  h2 {
    font-weight: 700;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    > input {
      width: 90%;
      height: 48px;

      padding: 0 16px;

      border-radius: 4px;
      border: solid 1px var(--grey-0);

      background-color: var(--grey-3);
      color: var(--grey-0);

      font-weight: 400;
      font-size: 16px;
    }
    label {
      align-self: flex-start;
      margin: 20px 0 10px 5%;

      font-weight: 400;
      font-size: 12px;
    }

    .inputPassword {
      display: flex;

      align-items: center;

      width: 90%;
      height: 48px;

      border: solid 1px var(--grey-0);
      border-radius: 4px;

      input {
        width: 95%;
        height: 43px;

        border: none;

        background-color: var(--grey-3);
        color: var(--grey-0);

        padding: 0 16px;

        font-weight: 400;
        font-size: 16px;
      }
      button {
        width: 40px;
        background: transparent;
      }
    }

    button {
      width: 90%;
      height: 48px;

      margin: 25px 0;

      color: var(--grey-0);

      border-radius: 4px;
      border: none;
    }
    p {
      font-weight: 600;
      font-size: 12px;

      margin-top: 20px;

      color: var(--grey-1);
    }

    .entrar {
      background-color: var(--color-primary);
    }

    .cadastre-se {
      background-color: var(--grey-1);
    }
  }
`;
