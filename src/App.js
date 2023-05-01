//import components and router to link up react- so that App.js knows about it.
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import BlogForm from './components/partials/BlogForm'
import NavBar from './components/partials/NavBar'



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>

            <Route
            path='/'
            element={<Home />}
            />
            <Route 
            path='/blog/:id'
            element={<Blog />}
            />
            <Route 
            path='/create'
            element={<BlogForm />}
            />

        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
