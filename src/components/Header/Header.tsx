import cn from "classnames";
import { FC, MouseEvent, ReactNode, useState } from "react";

import Logo from "../Logo";
import Line from "../Line";

import { Link } from "react-router-dom";
import s from "./style.module.scss";
const Header: FC = (): ReactNode => {
  const [juice, setJuice] = useState(false);

  const handleItemHover = (e: MouseEvent) => {
    e && setJuice(!juice);
  };

  return (
    <>
      <div className={s.header}>
        <nav className={s.menu}>
          <div className={s.localWrap}></div>
          <ul className={s.menuWrap}>
            <li
              className={s.menuItem}
              onMouseOver={handleItemHover}
              onMouseOut={handleItemHover}
            >
              <Link to={"/juice"}>
                <span
                  className={cn(s.itemTitle, {
                    [s.itemTitleJuice]: juice,
                  })}
                >
                  соки
                </span>
                <div
                  className={cn(s.round, {
                    [s.itemRoundJuice]: juice,
                  })}
                />
              </Link>
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>миксы</span>
              <div className={s.round} />
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>смузи</span>
              <div className={s.round} />
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>ласси</span>
              <div className={s.round} />
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>детокс</span>
              <div className={s.round} />
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>боулы</span>
              <div className={s.round} />
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>салаты</span>
              <div className={s.round} />
            </li>
            <li className={s.menuItem}>
              <span className={s.itemTitle}>здоровая еда</span>
              <div className={s.round} />
            </li>
          </ul>
        </nav>
      </div>
      <Line position={5} />
      <Logo />
    </>
  );
};

export default Header;
