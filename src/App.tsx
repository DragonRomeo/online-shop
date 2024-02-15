import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";

const products = fetch("https://dummyjson.com/products")
  .then(
    (res) => res.json(),
    (error) => console.log("Rejected: ", error),
  )
  .then(console.log);

export const App = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};
