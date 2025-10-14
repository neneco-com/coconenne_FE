import styled from "@emotion/styled";
import { Gangwon } from "@/styles/Font";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 78vh;
  padding: 0.8rem 1rem;
  gap: 1.2rem;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8rem;
    width: 370px;
`;

export const Title = styled.div`
    font-size: 1.25rem;
`;

export const SearchWrapper = styled.div`
    ${Gangwon}
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #F5F7F8;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    gap: 0.5rem;
`;

export const SearchInput = styled.input`
    ${Gangwon}
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    font-size: 1.2rem;

    &::placeholder {
        color: #B5BCBF;
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Box = styled.div`
    display: flex;
    background-color: #EEEFF1;
    border-radius: 4px;
    padding: 6rem 5.3rem;
    cursor: pointer;
`;