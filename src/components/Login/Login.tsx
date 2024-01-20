import { FC, ReactNode, useState } from "react";
import cn from "classnames";

import s from "./style.module.scss";

const Login: FC = (): ReactNode => {
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
        className={s.login}
        onMouseOver={handleItemOver}
        onMouseOut={handleItemOut}
      >
        <div className={s.login_title}>войти</div>
        <div
          className={cn(s.login_logo, {
            [s.login_logoY]: hover,
          })}
        />
      </div>
    </>
  );
};

export default Login;
