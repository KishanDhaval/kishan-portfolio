import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/kishan-portfolio" element={<LandingPage /> } exact />
        <Route path="/kishan-portfolio/project/:projectName" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
