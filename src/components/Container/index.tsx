import styled from "styled-components";

interface Icontainer {
  width?: string;
  height?: string;
  align?: string;
}

export const Container = styled.main<Icontainer>`
  margin: auto;
  width: ${({ width }) => width ?? "23rem"};
  height: ${({ height }) => height ?? ""};
  background-color: var(--grey-4);

  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => align ?? "center"};
  align-items: center;

  h1 {
    color: var(--color-primary);
    margin: 30px 0;
  }
`;
