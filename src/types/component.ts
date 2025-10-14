export interface BtnProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface TextBoxProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}