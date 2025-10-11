import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
  cursor: pointer;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Letter = styled.div<{ rotate: number; y: number }>`
  font-weight: 500;
  font-size: 4rem;
  display: inline-block;
  transform: rotate(${(props) => props.rotate}deg) translateY(${(props) => props.y}px);
`;