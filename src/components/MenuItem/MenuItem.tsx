import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import s from "./style.module.scss";

interface IMenuItem {
  title: string;
  color: string;
  url: string;
}

const MenuItem = ({ title, color, url }: IMenuItem): ReactNode => {
  const [itemColor, setItemColor] = useState("");
  const navigate = useNavigate();

  const handleItemOver = () => {
    setItemColor(color);
  };
  const handleItemOut = () => {
    setItemColor("");
  };

  const handleClick = () => {
    navigate(url);
  };

  return (
    <>
      <div
        className={s.menuItem}
        onMouseOver={handleItemOver}
        onMouseOut={handleItemOut}
        onClick={handleClick}
      >
        <span
          className={s.menuItem_title}
          style={{ color: "#2b2a29" && itemColor }}
        >
          {title}
        </span>
        <div
          className={s.round}
          style={{ backgroundColor: "#d9dada" && itemColor }}
        />
      </div>
    </>
  );
};

export default MenuItem;
