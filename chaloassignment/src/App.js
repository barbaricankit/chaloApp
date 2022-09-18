import "./App.css";
import "./styles/colors.css";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import CreateRoute from "./components/createroute/CreateRoute";
import ViewRoutes from "./components/viewroutes/ViewRoutes";
import SingleRoute from "./components/viewroutes/SingleRoute";
import BulkUpload from "./components/bulkupload/BulkUpload";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createroute" element={<CreateRoute />} />
        <Route path="/routes" element={<ViewRoutes />} />
        <Route path="/route/:routeId" element={<SingleRoute />} />
        <Route path="/editroute/:routeId" element={<CreateRoute />} />
        <Route path="/bulkupload" element={<BulkUpload />} />
      </Routes>
    </div>
  );
}

export default App;
