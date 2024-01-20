import { ReactNode, useState } from "react";
import cn from "classnames";

import s from "./style.module.scss";

interface ILocation {
  location?: string;
}
const UserLocation = ({ location = "ваш регион" }: ILocation): ReactNode => {
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
        className={s.location}
        onMouseOver={handleItemOver}
        onMouseOut={handleItemOut}
      >
        <div
          className={cn(s.location_logo, {
            [s.location_logoY]: hover,
          })}
        />
        <div className={s.location_title}>{location}</div>
        <div
          className={cn(s.location_arrow, {
            [s.location_arrowY]: hover,
          })}
        />
      </div>
    </>
  );
};

export default UserLocation;
