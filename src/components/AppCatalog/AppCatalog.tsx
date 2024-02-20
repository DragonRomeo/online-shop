import { Catalog } from "./Catalog/Catalog";
import { Filters } from "./Filters/Filters";
import style from "./AppCatalog.module.scss";
// import { useState } from "react";

const AppCatalog = () => {
  // const [loading, setLoading] = useState(true);

  return (
    <div className={style.app_catalog}>
      <Filters />
      <Catalog />
    </div>
  );
};

export default AppCatalog;
