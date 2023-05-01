import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom"
import Home from "./components/pages/Home";
import New from "./components/pages/New";
import Details from "./components/pages/Details";
import NotFound from "./components/pages/NotFound";

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
            path="/reviews/new"
            element={<New />}
          />

          <Route 
            path="/reviews/:id"
            element={<Details />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
