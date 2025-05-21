import { InputComponent, InputContainer, Label } from "./styles";

interface InputProps {
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlInputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  onChange,
  htmlInputProps,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputComponent
        placeholder={placeholder}
        onChange={onChange}
        {...htmlInputProps}
      />
    </InputContainer>
  );
};
