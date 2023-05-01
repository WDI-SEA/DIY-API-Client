import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';
import './App.css';

import Home from "./components/pages/Home"
import CharacterDetails from "./components/pages/CharacterDetails"
import Header from "./components/partials/Header"
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/characters/:id'
            element={<CharacterDetails />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
