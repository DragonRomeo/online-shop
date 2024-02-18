import { FC } from "react";
import { Product } from "../../../../models/Products";
import style from "./ProductCard.module.scss";

interface Props {
  value?: Product;
}

export const ProductCard: FC<Props> = ({ value }) => {
  return value ? (
    <div className={style.product_card}>
      <img className={style.img} src={value.thumbnail} alt="" />
      <p>{value.title}</p>
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value.price)}
      </p>
      <button className={style.product_btn}>Add to cart</button>
    </div>
  ) : (
    <></>
  );
};
