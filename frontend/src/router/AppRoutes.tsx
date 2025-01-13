import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home page</span>} />
      <Route path="/user" element={<span>User page</span>} />


      {/* For handle any URL, in navigate to the '/' directly */}
      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>
  );
};

export default AppRoutes;