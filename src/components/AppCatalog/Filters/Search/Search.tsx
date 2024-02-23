import { useState } from "react";
import style from "./Search.module.scss";
import { useDataContext } from "../../../providers/context";

export const Search = () => {
  const [value, setValue] = useState("");
  const { callback } = useDataContext();

  const handleChange = (event: { target: { value: string } }) => {
    const eTarget = event.target.value;
    setValue(eTarget);
  };

  const handleClick = () => {
    /*Нужно закинуть функцию со стейтом сюда через контекст
    и черех хендлклик передать туда значение */
    callback(value);
    console.log("handleClick");
  };

  return (
    <div className={style.search_container}>
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
          S
        </button>
      </label>
    </div>
  );
};
