import styled from "@emotion/styled";

const Basic = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  ${Basic};
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Letter = styled.div<{ rotate: number; y: number }>`
  font-weight: bold;
  font-size: 4rem;
  display: inline-block;
  transform: rotate(${(props) => props.rotate}deg) translateY(${(props) => props.y}px);
`;