import { ReactNode, useState } from "react";

import s from "./style.module.scss";

interface IMenuItem {
  title: string;
  url?: string;
}

const PageItem = ({ title }: IMenuItem): ReactNode => {
  const [round, setRound] = useState(false);

  const handleItemOver = () => {
    setRound(true);
  };
  const handleItemOut = () => {
    setRound(false);
  };

  return (
    <>
      <div
        className={s.pageItem}
        onMouseOver={handleItemOver}
        onMouseOut={handleItemOut}
      >
        <span className={s.pageItem_title}>{title}</span>
        {round && <div className={s.round} />}
      </div>
    </>
  );
};

export default PageItem;
