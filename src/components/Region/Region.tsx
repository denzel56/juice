import cn from "classnames";
import { ReactNode, useState } from "react";

import s from "./style.module.scss";

interface ILocation {
  region?: string;
}
const Region = ({ region = "ваш регион" }: ILocation): ReactNode => {
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
        className={s.region}
        onMouseOver={handleItemOver}
        onMouseOut={handleItemOut}
      >
        <div
          className={cn(s.region_logo, {
            [s.region_logoY]: hover,
          })}
        />
        <div className={s.region_title}>{region}</div>
        <div
          className={cn(s.region_arrow, {
            [s.region_arrowY]: hover,
          })}
        />
      </div>
    </>
  );
};

export default Region;
