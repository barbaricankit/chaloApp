import logo from './logo.svg';
import './App.css';
import './styles/colors.css'
import Home from './components/home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import CreateRoute from './components/Form/CreateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/createroute" element={<CreateRoute />}/> 
      </Routes>
    </div>
  );
}

export default App;
