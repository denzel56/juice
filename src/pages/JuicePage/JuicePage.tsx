import { FC, ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Line from "../../components/Line";

const JuicePage: FC = (): ReactNode => {
  return (
    <>
      <Header />
      <h1>Juice</h1>
      <Line top={-5} />
      <Footer />
    </>
  );
};

export default JuicePage;
