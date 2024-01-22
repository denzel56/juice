import { ReactNode } from "react";
import s from "./style.module.scss";

interface ILine {
  top?: number;
  mt?: number;
}
const Line = ({ top = 0, mt }: ILine): ReactNode => {
  return (
    <>
      <div className={s.line} style={{ top: top, marginTop: mt }} />
    </>
  );
};

export default Line;
