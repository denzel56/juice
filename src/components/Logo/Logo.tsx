import { FC, ReactNode } from "react";

// import LogoImg from "../../assets/logo.svg";
import s from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Logo: FC = (): ReactNode => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className={s.logo} onClick={handleClick} />
    </>
  );
};

export default Logo;
