import styled from "@emotion/styled";
import { Gangwon } from "@/styles/Font";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 75vh;
  padding: 0.8rem 1rem;
  gap: 1.5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 9rem;
    width: 400px;
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