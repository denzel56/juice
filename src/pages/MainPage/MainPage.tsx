import { FC, ReactNode } from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Image } from "@mantine/core";

import Header from "../../components/Header";
import slide1 from "../../assets/USP.png";
import slide2 from "../../assets/girl.png";
import s from "./style.module.scss";
import Line from "../../components/Line";

const MainPage: FC = (): ReactNode => {
  return (
    <>
      <Header />
      <Carousel>
        <CarouselSlide className={s.slide1}>
          <Image src={slide1} className={s.slideImage} />
        </CarouselSlide>
        <CarouselSlide className={s.slide2}>
          <Image src={slide2} />
        </CarouselSlide>
      </Carousel>
      <Line position={-5}/>
    </>
  );
};

export default MainPage;
