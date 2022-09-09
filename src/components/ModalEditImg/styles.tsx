import styled from "styled-components";

export const ContentModal = styled.div`
  width: 23rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-4);
  border-radius: 4px;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-top: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    input[type="file"] {
      display: none;
    }

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 40px;
      margin-top: 20px;
      border-radius: 5px;
      font-size: 16px;

      background-color: var(--grey-2);
      color: var(--grey-0);

      transition: 0.3s;

      cursor: pointer;
    }
    label:hover {
      filter: brightness(0.8);
    }
    button {
      margin-top: 20px;
      height: 50px;
      width: 90%;
      color: var(--grey-0);
      background-color: var(--color-primary);
      border: none;
      border-radius: 4px;
      font-size: 18px;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    border-radius: 4px;
    padding: 0 10px;
    button {
      background: transparent;
      border: none;
      font-size: 20px;
      color: var(--grey-0);
    }
  }
`;
