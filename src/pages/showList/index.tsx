import { MainContainer, MainTitle } from "../../components/Styles/globalStyles";
import { useApp } from "../../context/appContext";
import {
  Body,
  Divider,
  ProductContainer,
  ProductDescription,
  ProductPrice,
  ProductTitle,
} from "./styles";

export const ListProducts = () => {
  const { productList } = useApp();

  return (
    <MainContainer>
      <MainTitle>Lista de Produtos</MainTitle>
      <Body>
        {productList.map((product, index) => (
          <ProductContainer key={index}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>
              Categoria: {product.category}
            </ProductDescription>
            <ProductDescription>
              Fornecedor: {product.supplier}
            </ProductDescription>
            <ProductDescription>Código: {product.code}</ProductDescription>
            <ProductPrice>
              Valor:{" "}
              {product.value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </ProductPrice>
            <Divider />
          </ProductContainer>
        ))}
      </Body>
    </MainContainer>
  );
};
