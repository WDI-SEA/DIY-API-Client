import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header'
import axios from 'axios'

import './App.css';
import Post from './components/Post';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';

function App() {


  const initialState = {
    name: '',
    title: 0,
    content: ''
  }

  const handleNewPost = async (e, form) => {
    // e.preventDefault()
    console.log('form submited')
    console.log(form)
    try{
      axios.post(`${process.env.REACT_APP_SERVER_URL}/blogs`, form)
    }catch(err){
      console.log(err)
    }
  }



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
            path='/post'
            element={
            <Post 
              handleNewPost={handleNewPost}
              initialState={initialState}
            />}
          />

          <Route 
            path='/post/:id'
            element={<PostDetails />}
          />

          <Route 
            path='/post/:id/edit'
            element={<EditPost />}
          />



        </Routes>
      </Router>


    </div>
  );
}

export default App;
