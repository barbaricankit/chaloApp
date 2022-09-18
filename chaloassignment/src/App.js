import "./App.css";
import "./styles/colors.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import CreateRoute from "./components/createroute/CreateRoute";
import ViewRoutes from "./components/viewroutes/ViewRoutes";
import SingleRoute from "./components/viewroutes/SingleRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createroute" element={<CreateRoute />} />
        <Route path="/routes" element={<ViewRoutes />} />
        <Route path="/route/:routeId" element={<SingleRoute />} />
        <Route path="/editroute/:routeId" element={<CreateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
