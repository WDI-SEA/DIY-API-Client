import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
 
import Home from "./components/Home"
import CreateLoadOut from "./components/CreateLoadOut"
import EditLoadOut from "./components/EditLoadOut";
import LoadOutDetails from "./components/LoadOutDetails";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
          path="/"
          element={<Home />}
          />
          <Route 
          path="/loadout/create"
          element={<CreateLoadOut />}
          />
          <Route 
          path="/loadout/:id"
          element={<LoadOutDetails />}
          />
          <Route 
          path="/loadout/edit/:id"
          element={<EditLoadOut />}
          />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
