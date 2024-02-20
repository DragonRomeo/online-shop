import { Search } from "./Search/Search";
import style from "./Filters.module.scss";

export const Filters = () => {
  return (
    <div className={style.filters_container}>
      <Search />
    </div>
  );
};
