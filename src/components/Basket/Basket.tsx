import { ReactNode, useState } from "react";
import cn from "classnames";

import s from "./style.module.scss";

interface IBasket {
  items?: number;
}
const Basket = ({ items = 0 }: IBasket): ReactNode => {
  const [hover, setHover] = useState(false);

  const handleItemOver = () => {
    setHover(true);
  };
  const handleItemOut = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className={s.basket}
        onMouseOver={handleItemOver}
        onMouseOut={handleItemOut}
      >
        <div className={s.basket_title}>{`корзина (${items})`}</div>
        <div
          className={cn(s.location_logo, {
            [s.location_logoY]: hover,
          })}
        />
      </div>
    </>
  );
};

export default Basket;
