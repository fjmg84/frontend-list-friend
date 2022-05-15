import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Index } from "../components/Index";
import { Show } from "../components/Show";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/show/:id/:status" element={<Show />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
