import styled from "@emotion/styled";
import type { BtnProps } from "@/types/component";

export default function Btn({ children, onClick }: BtnProps) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  max-width: 90%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 999px;
  background-color: #54697d;
  color: #fafafa;
  font-size: 1.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #44576b;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;