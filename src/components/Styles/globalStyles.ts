import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100dvh;
  width: 100%;
  flex-direction: column;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 1rem;
  text-align: center;
`;
