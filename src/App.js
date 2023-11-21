import "./App.css";
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/layouts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  // aos animation (using in landing)
  AOS.init();
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* Các Route khác */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
