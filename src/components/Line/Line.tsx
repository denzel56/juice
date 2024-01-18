import { FC, ReactNode } from "react";
import s from "./style.module.scss";

const Line: FC = (): ReactNode => {
  return (
    <>
      <div className={s.line} />
    </>
  );
};

export default Line;
