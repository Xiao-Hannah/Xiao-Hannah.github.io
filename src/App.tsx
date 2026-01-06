import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmGrain from "@/components/layout/FilmGrain";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "@/pages/Index";
import Bloome from "@/pages/Bloome";
import FridgeFriend from "@/pages/FridgeFriend";
import ForFun from "@/pages/ForFun";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <FilmGrain />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bloome" element={<Bloome />} />
        <Route path="/fridgefriend" element={<FridgeFriend />} />
        <Route path="/for-fun" element={<ForFun />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
