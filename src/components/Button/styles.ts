import { styled } from "styled-components";

export const ButtonContainer = styled.button<{ type?: string }>`
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "tertiary":
        return theme.colors.tertiary;
      default:
        return theme.colors.primary;
    }
  }};
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 200px;

  &:hover {
    background-color: ${({ type, theme }) => {
      switch (type) {
        case "primary":
          return theme.colors.primaryHover;
        case "secondary":
          return theme.colors.secondaryHover;
        case "tertiary":
          return theme.colors.tertiaryHover;
        default:
          return theme.colors.primaryHover;
      }
    }};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
