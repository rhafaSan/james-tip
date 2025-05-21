import { Route, Routes } from "react-router-dom";
import { RegisterProducts } from "../pages/register";
import { ListProducts } from "../pages/showList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterProducts />} />
      <Route path="/list" element={<ListProducts />} />
    </Routes>
  );
};
