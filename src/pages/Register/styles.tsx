import styled from "styled-components";

export const ContentForm = styled.div`
  width: 23rem;
  height: 56rem;

  margin-bottom: 50px;
  background-color: var(--grey-3);
  color: var(--grey-0);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  h2 {
    font-weight: 700;
    font-size: 18px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
    margin: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    input,
    select {
      width: 90%;
      height: 3rem;

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

    button {
      width: 90%;
      height: 3rem;

      margin: 25px 0;

      color: var(--grey-0);

      border-radius: 4px;
      border: none;
    }
    .cadastrar {
      background-color: var(--color-primary-disable);
    }
  }
`;

export const ContentHeaders = styled.div`
  width: 23rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 50px 0;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  button {
    width: 4.37rem;
    height: 40px;
    background-color: var(--grey-3);
    color: var(--grey-0);

    border: none;
    border-radius: 4px;

    font-weight: 600;
    font-size: 12px;
  }
`;
