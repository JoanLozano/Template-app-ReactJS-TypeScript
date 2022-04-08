import { Routes as Router, Route } from "react-router-dom";

// Import Pages form views folder
import About from "../Views/About/index";
import Home from "../Views/Home/index";

export default function Routes() {
  return (
    <Router>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
    </Router>
  );
}
