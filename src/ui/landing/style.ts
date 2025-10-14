import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22vh;
  gap: 15rem;
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