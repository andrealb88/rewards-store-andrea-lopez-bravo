import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Points } from "../pages/Points";
import { NotFound } from "../components/notification/NotFound";

export const MyRouter = () => {
  return (
    <div>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="store-lopez-andrea/history" element={<History />} />
      <Route path="store-lopez-andrea/points" element={<Points />} />
      <Route path="store-lopez-andrea/NotFound" element={<NotFound />} />
    </Routes>
    </div>
  );
};
