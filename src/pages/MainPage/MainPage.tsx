import { FC, ReactNode } from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Image, Title } from "@mantine/core";

import Header from "../../components/Header";
import Line from "../../components/Line";
import slide1 from "../../assets/USP.png";
import slide2 from "../../assets/girl.png";
import assortment from "../../assets/assortment.png";

import s from "./style.module.scss";
import Footer from "../../components/Footer";

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
      <Line top={-5} />
      <Title order={1} className={s.productsTitle}>
        наша продукция
      </Title>
      <Line top={5} />
      <section className={s.products}>
        <Image src={slide2} />
        <Image src={assortment} />
      </section>
      <Line top={-5} />
      <Footer />
    </>
  );
};

export default MainPage;
