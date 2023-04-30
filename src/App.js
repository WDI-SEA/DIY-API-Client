import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './App.css';


import Home from "./components/pages/Home"
import BlogDetails from "./components/pages/BlogDetails"
import Header from "./components/partials/Header"


function App() {
  return (
    <div className="App">
     <Router >
    <Header />
    <Routes>


    <Route 
    path="/"
    element={<Home />}/>

    <Route 
    path="/blogs/:id"
    element={<BlogDetails />}
    />


    </Routes>

     </Router>
    </div>
  );
}

export default App;
