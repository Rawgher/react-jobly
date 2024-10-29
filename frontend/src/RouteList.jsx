import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import CompaniesList from "./components/CompaniesList";
import Company from "./components/Company";
import JobsList from "./components/JobsList";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/companies" element={<CompaniesList />} />
      <Route path="/companies/:handle" element={<Company />} />
      <Route path="/jobs" element={<JobsList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
