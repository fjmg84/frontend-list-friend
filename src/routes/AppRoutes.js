import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Index } from "../components/Home/Index";
import { Show } from "../components/Show/Show";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/show/:id" element={<Show />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
