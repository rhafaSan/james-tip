import { styled } from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  width: 80%;
  margin: auto;
  border-radius: 8px;
  height: fit-content;
  overflow-x: auto;
  gap: 1rem;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ccc;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const ProductContainer = styled.div`
  width: 450px;
  min-width: 350px;
  height: 450px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    height: auto;
    margin: 8px 0;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 0.5rem;
  max-width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* Máximo de 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 3; /* Máximo de 3 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: auto;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
`;
