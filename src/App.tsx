import { DataContext } from "./components/providers/context";
import { useEffect, useState } from "react";
import { AppRouter } from "./pages/routes/AppRouter";

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        console.log(result);
        setData(result.products);
      } catch (e: unknown) {
        const err = e as Error;
        alert(err);
      }
    };

    getData();
  }, []);
  return (
    <>
      <DataContext.Provider value={data}>
        <AppRouter></AppRouter>
      </DataContext.Provider>
    </>
  );
};
