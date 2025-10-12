import styled from "@emotion/styled";
import { Gangwon } from "@/styles/Font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 52vh;
  gap: 6rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.div`
  font-size: 2.25rem;
  font-weight: 500;
`;

export const SubTitle = styled.h1`
  ${Gangwon}
  font-size: 1.25rem;
  color: #B5BCBF; 
  font-weight: 300;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Box = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.5rem 3rem;
  border: none;
  font-size: 1.8rem;
  border-radius: 1rem;
  background-color: #FEFEFE;
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 20px rgba(255, 242, 93, 0.5);
  }
`;