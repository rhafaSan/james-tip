import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "primary" | "secondary" | "tertiary";
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};
