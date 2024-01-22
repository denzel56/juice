import { ReactNode } from "react";
import { Button, Image } from "@mantine/core";

import heart from "../../assets/heart.svg";
import s from "./style.module.scss";

interface IProductCard {
  image: string;
  name: string;
  volume: string;
  price: number;
  // like: boolean;
}

const ProductCard = ({
  image,
  name,
  volume,
  price,
}: IProductCard): ReactNode => {
  return (
    <>
      <div className={s.product}>
        <Image src={image} className={s.product_img} />
        <div className={s.product_name}>{name}</div>
        <div className={s.volume}>{volume}</div>
        <div className={s.product_price}>
          <span className={s.product_price_value}>{`${price}₽`}</span>
          <Image src={heart} className={s.like} />
        </div>
        <Button variant="filled" className={s.product_button}>
          в корзину
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
