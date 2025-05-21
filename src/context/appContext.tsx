import { createContext, useContext, useState } from "react";

interface Product {
  name: string;
  code: string;
  category: string;
  supplier: string;
  value: number;
}

type AppContextType = {
  productName: string;
  setProductName: (name: string) => void;
  productCode: string;
  setProductCode: (code: string) => void;
  productCategory: string;
  setProductCategory: (category: string) => void;
  productSupplier: string;
  setProductSupplier: (supplier: string) => void;
  productValue: number;
  setProductValue: (value: number) => void;
  product: Product | undefined;
  setProduct: (product: Product) => void;
  productList: Product[];
  setProductList: (products: Product[]) => void;
  handleAddProduct: () => void;
};

type AppProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: AppProviderProps) => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSupplier, setProductSupplier] = useState("");
  const [productValue, setProductValue] = useState(0);

  const [product, setProduct] = useState<Product>();
  const [productList, setProductList] = useState<Product[]>([]);

  const handleAddProduct = () => {
    const newProduct: Product = {
      name: productName,
      code: productCode,
      category: productCategory,
      supplier: productSupplier,
      value: productValue,
    };
    setProduct(newProduct);
    setProductList((prevProducts) => [...prevProducts, newProduct]);
    localStorage.setItem(
      "productList",
      JSON.stringify([...productList, newProduct])
    );
  };

  return (
    <AppContext.Provider
      value={{
        productName,
        setProductName,
        productCode,
        setProductCode,
        productCategory,
        setProductCategory,
        productSupplier,
        setProductSupplier,
        productValue,
        setProductValue,
        product,
        setProduct,
        productList,
        setProductList,
        handleAddProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return context;
};

export { AppContext, AppProvider, useApp };
