import { FC, ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Line from "../../components/Line";
import ProductCard from "../../components/ProductCard/ProductCard";

import lassie from "../../assets/products/lassie.png";
import mix from "../../assets/products/mix.png";
import boul from "../../assets/products/boul.png";
import orange from "../../assets/products/orange.png";
import smoozie from "../../assets/products/smoozie.png";
import detox from "../../assets/products/detox.png";
import doctor from "../../assets/products/doctor.png";
import granat from "../../assets/products/granat.png";
import green from "../../assets/products/green.png";

import s from "./style.module.scss";

const products = [
  {
    image: lassie,
    name: "ласси",
    volume: "500 мл",
    price: 375,
  },
  {
    image: mix,
    name: "микс",
    volume: "500 мл",
    price: 400,
  },
  {
    image: boul,
    name: "боул",
    volume: "500 мл",
    price: 450,
  },
  {
    image: orange,
    name: "апельсиновый сок",
    volume: "500 мл",
    price: 400,
  },
  {
    image: smoozie,
    name: "смузи",
    volume: "500 мл",
    price: 385,
  },
  {
    image: detox,
    name: "детокс",
    volume: "500 мл",
    price: 500,
  },
  {
    image: doctor,
    name: "доктор",
    volume: "500 мл",
    price: 375,
  },
  {
    image: granat,
    name: "гранатовый сок",
    volume: "500 мл",
    price: 500,
  },
  {
    image: green,
    name: "грин",
    volume: "500 мл",
    price: 450,
  },
  {
    image: lassie,
    name: "ласси",
    volume: "500 мл",
    price: 375,
  },
  {
    image: mix,
    name: "микс",
    volume: "500 мл",
    price: 400,
  },
  {
    image: boul,
    name: "боул",
    volume: "500 мл",
    price: 450,
  },
];

const JuicePage: FC = (): ReactNode => {
  return (
    <>
      <Header />
      <div className={s.header}>
        <h1>Соки</h1>
      </div>
      <div className={s.pageItems}>
        {products.map((item) => {
          return (
            <ProductCard
              image={item.image}
              name={item.name}
              volume={item.volume}
              price={item.price}
            />
          );
        })}
      </div>
      <Line top={-5} />
      <Footer />
    </>
  );
};

export default JuicePage;
