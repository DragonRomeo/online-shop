import { useState } from "react";
import style from "./Search.module.scss";

export const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
  };
  return (
    <>
      <label>
        <input
          className={style.search}
          name="key"
          id="key"
          type="text"
          placeholder="input here"
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
