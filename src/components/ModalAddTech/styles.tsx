import styled from "styled-components";

export const ContentModal = styled.div`
  width: 23rem;
  height: 23rem;
  background-color: var(--grey-4);
  border-radius: 4px;

  div {
    border-radius: 4px 4px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
    color: var(--grey-0);
    height: 50px;
    padding: 0 20px;
    button {
      color: var(--grey-0);
      background: transparent;
      border: none;
      font-size: 20px;
    }
  }

  form {
    margin: auto;
    display: flex;
    flex-direction: column;

    color: var(--grey-0);
    width: 90%;
    label {
      font-size: 12px;
      margin: 20px 0;
    }
    input,
    select {
      height: 50px;
      border: none;
      background-color: var(--grey-2);
      font-size: 16px;
      color: var(--grey-0);
      padding: 0 16px;
      border-radius: 4px;
    }
    button {
      margin-top: 20px;
      height: 50px;
      color: var(--grey-0);
      background-color: var(--color-primary);
      border: none;
      border-radius: 4px;
    }
  }
`;
