import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from "./components/partials/Header";
import Home from "./components/pages/Home"
import Authors from "./components/pages/Authors";
import BlogDetails from "./components/pages/BlogDetails";

import './App.css';

function App() {

  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([]);
  console.log("showform: ", showForm)

  const handleFormClick = () => {
    console.log("form clicked")
    setShowForm(!showForm)
  }

  return (
    <div className="App">
      <Router>
      <Header 
      handleFormClick={handleFormClick}
      showForm={showForm}
      />
      <Routes>
        <Route
          path='/'
          element={<Home
            showForm={showForm}
            setShowForm={setShowForm}
            blogs={blogs}
            setBlogs={setBlogs}
            />}
            />
        <Route
        path="/blogs/:id"
        element={<BlogDetails
          showForm={showForm}
          setShowForm={setShowForm}
          blogs={blogs}
          setBlogs={setBlogs}
        />}
        />
        <Route
        path='/authors'
        element={<Authors/>}
        />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
