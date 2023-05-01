import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
