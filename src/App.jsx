import { Login } from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { Home } from "./Pages/Home";
import { ShowSearch } from "./Pages/ShowSearch";
function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing_page" element={<LandingPage />}>
          <Route path="/landing_page" element={<Home />} />
          <Route path="/landing_page/show_search" element={<ShowSearch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
