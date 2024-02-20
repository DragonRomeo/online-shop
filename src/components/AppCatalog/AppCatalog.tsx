import { Catalog } from "./Catalog/Catalog";
import { Filters } from "./Filters/Filters";
import style from "./AppCatalog.module.scss";

const AppCatalog = () => {
  return (
    <div className={style.app_container}>
      <div className={style.banner}></div>
      <div className={style.app_catalog}>
        <Filters />
        <Catalog />
      </div>
    </div>
  );
};

export default AppCatalog;
