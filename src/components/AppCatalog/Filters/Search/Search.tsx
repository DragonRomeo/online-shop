import { useState } from "react";
import style from "./Search.module.scss";
import { useDataContext } from "../../../providers/context";
import searchImage from "../../../../assets/img/search2.png";
import crossImage from "../../../../assets/img/cross5.png";

export const Search = () => {
  const [value, setValue] = useState("");
  const { callback } = useDataContext();

  const handleChange = (event: { target: { value: string } }) => {
    const eTarget = event.target.value;
    setValue(eTarget);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    callback(value);
    console.log("handleClick");
  };

  const handleClearClick = () => {
    setValue("");
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
        onKeyDown={handleKeyDown}
      />
      <button className={style.button_search} onClick={handleClearClick}>
        <img className={style.search_image} src={crossImage} alt="crossImage" />
      </button>
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
