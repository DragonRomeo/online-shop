import { createContext, useContext } from "react";
import { Product } from "../../models/Products";

export const DataContext = createContext<Array<Product> | null>(null);
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is not provided");
  }
  return context;
};
