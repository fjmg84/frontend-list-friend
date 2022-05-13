import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Index } from "../components/Index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
