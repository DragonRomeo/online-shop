import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/context";
import { Product } from "../../../models/Products";
import style from "./Catalog.module.scss";
import { ProductCard } from "./ProductCard/ProductCard";

export const Catalog = () => {
  const [products, setProducts] = useState<null | Array<Product>>(null);
  const context = useContext(DataContext);

  useEffect(() => {
    const loadData = async () => {
      console.log(context);
      setProducts(context);
    };
    loadData();
  }, [context]);

  return products ? (
    <div className={style.products_container}>
      {products.map((item) => (
        <ProductCard key={item.id} value={item}></ProductCard>
      ))}
    </div>
  ) : (
    <div className={style.loader_container}>
      <p className={style.loader_message}>Loading...</p>
    </div>
  );
};
