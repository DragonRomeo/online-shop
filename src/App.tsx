import { DataContext } from "./components/providers/context";
import { useEffect, useState } from "react";
import { AppRouter } from "./pages/routes/AppRouter";
import { Product } from "./models/Products";

export const App = () => {
  const [data, setData] = useState<Array<Product>>([]);
  const [search, setSearch] = useState<string | null>(null);

  const callback = (value: string) => {
    setSearch(value);
    console.log("value", value);
  };

  useEffect(() => {
    console.log("search", search);
    const searchValue = search ? search : "";
    const getData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchValue}`,
        );
        const result = await response.json();
        console.log(result);
        setData(result.products);
      } catch (e: unknown) {
        const err = e as Error;
        alert(err);
      }
    };

    getData();
  }, [search]);
  return (
    <>
      <DataContext.Provider value={{ data, callback }}>
        <AppRouter></AppRouter>
      </DataContext.Provider>
    </>
  );
};
