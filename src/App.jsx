import "./App.css";
import { PlanetList } from "./comp/PlanetList";
import { PlanetItem } from "./comp/PlanetItem";
import { Details } from "./comp/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlanetList />} />

        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
