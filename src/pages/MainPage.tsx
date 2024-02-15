import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={style.main_page}>
      <>
        <Header />
        <Footer />
      </>
    </div>
  );
};
