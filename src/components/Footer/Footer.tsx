import { FC, ReactNode } from "react";
import { Title } from "@mantine/core";

import s from "./style.module.scss";

const Footer: FC = (): ReactNode => {
  return (
    <>
      <footer className={s.footer}>
        <Title order={2} className={s.footer_title}>
          присоединяйтесь к vita juice
        </Title>
      </footer>
    </>
  );
};

export default Footer;
