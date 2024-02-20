import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { MainPage } from "../MainPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" /> element={<MainPage />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
