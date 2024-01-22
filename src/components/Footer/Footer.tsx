import { FC, ReactNode } from "react";
import { Image, Title } from "@mantine/core";
import fb from "../../assets/facebook.svg";
import inst from "../../assets/instagram.svg";
import vk from "../../assets/vk.svg";

import s from "./style.module.scss";

const Footer: FC = (): ReactNode => {
  return (
    <>
      <footer className={s.footer}>
        <Title order={2} className={s.footer_title}>
          присоединяйтесь к vita juice
        </Title>
        <div className={s.footer_icons}>
          <div className={s.footer_icons_wrap}>
            <Image src={fb} className={s.icon} />
          </div>
          <div className={s.footer_icons_wrap}>
            <Image src={inst} className={s.icon} />
          </div>
          <div className={s.footer_icons_wrap}>
            <Image src={vk} className={s.icon} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
