import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
