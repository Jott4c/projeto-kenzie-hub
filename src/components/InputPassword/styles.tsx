import styled from "styled-components";

export const ContentModal = styled.div`
  background-color: var(--grey-4);
  border-radius: 4px;
  z-index: 800;

  > div {
    display: flex;
    justify-content: flex-end;
    > button {
      border: none;
      background: transparent;
      color: var(--grey-0);
      font-size: 16px;
      margin: 3px;
    }
  }

  form {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .password {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .inputPassword {
        display: flex;

        align-items: center;

        width: 80%;
        height: 48px;

        border: solid 1px var(--grey-0);
        border-radius: 4px;

        margin: 20px 0px 0 20px;
        background-color: var(--grey-3);

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
          border: none;
          color: var(--grey-0);
        }
      }
      > button {
        height: 50px;
        width: 50px;

        font-size: 30px;

        background: transparent;
        border: none;

        color: var(--sucess);
      }
    }
  }
`;
