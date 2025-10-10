import styled from "@emotion/styled";

const Basic = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${Basic};
  width: 100%;
  max-width: 400px;
  height: 100vh;
  row-gap: 10rem;
  cursor: pointer;
`;