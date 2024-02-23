import { createContext, useContext } from "react";
import { Product } from "../../models/Products";

export interface IContext {
  data: Array<Product>;
  callback: (value: string) => void;
}

export const DataContext = createContext<IContext | null>(null);
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context is not provided");
  }
  return context;
};
