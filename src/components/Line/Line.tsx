import { ReactNode } from "react";
import s from "./style.module.scss";

interface ILine {
  position: number;
}
const Line = ({ position }: ILine): ReactNode => {
  return (
    <>
      <div className={s.line} style={{ top: position }} />
    </>
  );
};

export default Line;
