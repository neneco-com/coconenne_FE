import styled from "@emotion/styled";
import type { TextBoxProps } from "@/types/component";

export default function TextBox({ value, onChange, placeholder }: TextBoxProps) {
    return <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 400px;
  max-width: 90%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 999px;
  background-color: #F5F7F8;
  font-size: 1.25rem;
  outline: none;
  cursor: pointer;

  &::placeholder {
    color: #B5BCBF;
  }

  &:hover {
    background-color: #eff1f1;
  }

  &:focus {
    background-color: #eff1f1;
  }
`;