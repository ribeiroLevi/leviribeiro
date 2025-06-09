import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { projects } from "../src/data";
import { FullProject } from "./components/fullProjects";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {projects.map(({ path, title, fullPic, description, pics }, idx) => (
          <Route
            key={idx}
            path={path}
            element={
              <FullProject
                title={title}
                fullPic={fullPic}
                description={[description]}
                pics={pics}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
