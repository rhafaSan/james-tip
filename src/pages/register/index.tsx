import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useApp } from "../../context/appContext";
import { ButtonContainer, FormContainer } from "./style";
import { MainContainer, MainTitle } from "../../components/Styles/globalStyles";
import { useState } from "react";

export const RegisterProducts = () => {
  const navigate = useNavigate();

  const {
    setProductCategory,
    setProductCode,
    setProductName,
    setProductSupplier,
    setProductValue,

    handleAddProduct,
  } = useApp();

  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numericValue = rawValue.replace(/\D/g, "");
    const floatValue = (Number(numericValue) / 100).toFixed(2);
    const formatted = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(floatValue));

    setValue(formatted);
    setProductValue(Number(numericValue) / 100);
  };

  const handleRegister = () => {
    handleAddProduct();
  };
  return (
    <MainContainer>
      <MainTitle>Registrar produtos</MainTitle>
      <FormContainer>
        <Input
          placeholder="Nome"
          label="Nome do produto"
          onChange={(e) => setProductName(e.target.value)}
        />
        <Input
          placeholder="Código"
          label="Código do produto"
          onChange={(e) => setProductCode(e.target.value)}
        />
        <Input
          placeholder="Categoria"
          label="Categoria do produto"
          onChange={(e) => setProductCategory(e.target.value)}
        />
        <Input
          placeholder="Fornecedor"
          label="Fornecedor"
          onChange={(e) => setProductSupplier(e.target.value)}
        />
        <Input
          placeholder="Valor"
          label="Valor do produto"
          onChange={handleChange}
          htmlInputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            value: value,
          }}
        />
        <ButtonContainer>
          <Button type="secondary" onClick={handleRegister}>
            Cadastrar
          </Button>
          <Button type="tertiary" onClick={() => navigate("/list")}>
            Ver Produtos
          </Button>
        </ButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};
