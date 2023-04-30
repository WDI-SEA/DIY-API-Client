import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from "./components/pages/Home"
import PostDetails from "./components/pages/PostDetails"
import Header from "./components/partials/Header"
import NotFound from "./components/partials/NotFound";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/posts/:id"
            element={<PostDetails />}
          />
          <Route 
            path="/*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
