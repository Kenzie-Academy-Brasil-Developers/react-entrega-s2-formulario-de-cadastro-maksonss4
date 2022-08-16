import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

export function ContainerRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to={"login"} />} />
    </Routes>
  );
}
