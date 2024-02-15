import { Catalog } from "./Catalog/Catalog";
import { Filters } from "./Filters/Filters";
import style from "./AppCatalog.module.scss";

const AppCatalog = () => {
  return (
    <div className={style.app_catalog}>
      <Filters />
      <Catalog />
    </div>
  );
};

export default AppCatalog;
