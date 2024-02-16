import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { DataContext } from "./components/providers/context";
import { MainPage } from "./pages/MainPage";
import { useEffect, useState } from "react";

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
  });
  return (
    <>
      <DataContext.Provider value={data}>
        <Header />
        <MainPage />
        <Footer />
      </DataContext.Provider>
    </>
  );
};
