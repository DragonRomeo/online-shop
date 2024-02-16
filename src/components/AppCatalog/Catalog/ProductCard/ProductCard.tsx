import { FC } from "react";
import { Product } from "../../../../models/Products";

interface Props {
  value?: Product;
}

export const ProductCard: FC<Props> = ({ value }) => {
  return value ? (
    <div>
      <img src={value.images[0]} alt="" />
      <p>{value.title}</p>
      <p>{value.price}</p>
      <button>Add to cart</button>
    </div>
  ) : (
    <></>
  );
};
