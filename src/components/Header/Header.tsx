import { FC, ReactNode } from "react";

import Line from "../Line";
import Logo from "../Logo";

import Basket from "../Basket";
import Login from "../Login";
import MenuItem from "../MenuItem";
import PageItem from "../PageItem";
import Region from "../Region";
import s from "./style.module.scss";

const menuItems = [
  {
    title: "соки",
    color: "#f29114",
    url: "/juices",
  },
  {
    title: "миксы",
    color: "#fecf3d",
    url: "/mixes",
  },
  {
    title: "смузи",
    color: "#f08aa8",
    url: "/smoothies",
  },
  {
    title: "ласси",
    color: "#e5097f",
    url: "/lassie",
  },
  {
    title: "детокс",
    color: "#ef7f1a",
    url: "/detox",
  },
  {
    title: "боулы",
    color: "#ae4a84",
    url: "/bowls",
  },
  {
    title: "салаты",
    color: "#009846",
    url: "/salads",
  },
  {
    title: "здоровая еда",
    color: "#7bb933",
    url: "/healthy",
  },
];

const pageItems = [
  {
    title: "о нас",
    url: "/about",
  },
  {
    title: "франшиза",
    url: "/franchise",
  },
  {
    title: "контакты",
    url: "/contacts",
  },
  {
    title: "работа",
    url: "/work",
  },
];
const Header: FC = (): ReactNode => {
  return (
    <>
      <div className={s.header}>
        <div className={s.topNav}>
          <Region />
          <Basket />
          <Login />
        </div>
        <nav className={s.menu}>
          <div className={s.localWrap}></div>
          <div className={s.menuWrap}>
            {menuItems.map((item) => {
              return (
                <MenuItem
                  title={item.title}
                  color={item.color}
                  url={item.url}
                />
              );
            })}
          </div>
          <div className={s.pagesWrap}>
            {pageItems.map((item) => {
              return <PageItem title={item.title} />;
            })}
          </div>
        </nav>
      </div>
      <Line top={5} />
      <Logo />
    </>
  );
};

export default Header;
