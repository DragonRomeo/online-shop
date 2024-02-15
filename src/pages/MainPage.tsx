import AppCatalog from "../components/AppCatalog/AppCatalog";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={style.main_page}>
      <>
        <AppCatalog />
      </>
    </div>
  );
};
