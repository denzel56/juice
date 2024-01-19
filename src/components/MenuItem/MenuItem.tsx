import { ReactNode, useState } from "react";

import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

interface IMenuItem {
  title: string;
  color: string;
  url: string;
}

const MenuItem = ({ title, color, url }: IMenuItem): ReactNode => {
  const [itemColor, setItemColor] = useState("");
  const navigate = useNavigate();

  const handleItemOver = () => {
    switch (title) {
      case "соки":
        setItemColor(color);
        break;
      case "миксы":
        setItemColor(color);
        break;
      case "смузи":
        setItemColor(color);
        break;
      case "ласси":
        setItemColor(color);
        break;
      case "детокс":
        setItemColor(color);
        break;
      case "боулы":
        setItemColor(color);
        break;
      case "салаты":
        setItemColor(color);
        break;
      case "здоровая еда":
        setItemColor(color);
        break;
      default:
        setItemColor("#d9dada");
        break;
    }
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
