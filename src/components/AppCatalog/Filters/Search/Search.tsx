import { useState } from "react";
import style from "./Search.module.scss";
import { useDataContext } from "../../../providers/context";
import searchImage from "../../../../assets/img/search2.png";

export const Search = () => {
  const [value, setValue] = useState("");
  const { callback } = useDataContext();

  const handleChange = (event: { target: { value: string } }) => {
    const eTarget = event.target.value;
    setValue(eTarget);
  };

  const handleClick = () => {
    callback(value);
    console.log("handleClick");
  };

  return (
    <label className={style.label}>
      <input
        className={style.search}
        name="key"
        id="key"
        type="text"
        placeholder="input here"
        value={value}
        onChange={handleChange}
      />
      <button className={style.button_search} onClick={handleClick}>
        <img
          className={style.search_image}
          src={searchImage}
          alt="searchImage"
        />
      </button>
    </label>
  );
};
