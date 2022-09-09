import styled from "styled-components";

export const ContentModal = styled.div`
  background-color: var(--grey-4);
  border-radius: 4px;

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
    .rest {
      > input {
        height: 40px;
        border-radius: 3px;

        font-size: 20px;

        background-color: var(--grey-3);
        color: var(--grey-0);
        margin: 20px 0px 20px 20px;
      }
      button {
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
