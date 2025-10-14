import styled from "@emotion/styled";

const Basic = `
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.div`
  ${Basic}
  display: flex;
  gap: 4rem;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const Letter = styled.div<{ rotate: number; y: number }>`
  display: flex;
  font-weight: 500;
  font-size: 4rem;
  display: inline-block;
  transform: rotate(${(props) => props.rotate}deg) translateY(${(props) => props.y}px);
`;

export const Group = styled.div`
    ${Basic}
    row-gap: 10rem;
`;

export const TextGroup = styled.div`
    ${Basic}
    row-gap: 1.25rem;
`;