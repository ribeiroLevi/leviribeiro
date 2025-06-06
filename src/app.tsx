import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Project } from "./components/project";
import { FullProject } from "./components/fullProjects";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<FullProject />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
