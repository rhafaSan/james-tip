// src/styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      error: string;
      background: string;
      primaryHover: string;
      secondaryHover: string;
      tertiaryHover: string;
    };
  }
}
