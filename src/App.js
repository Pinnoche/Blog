import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import NoPage from './pages/NoPage';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import { useUserContext } from './hooks/useUserContext';


function App() {
  const { user } = useUserContext();
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="content">
         <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" /> } />
            <Route path="/create" element={user ? <Create /> : <Navigate to="/login" /> } />
            <Route path="/blogs/:id" element={user ? <BlogDetails /> : <Navigate to="/login" /> } />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" /> } />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" /> } />
            <Route path="/*" element={<NoPage />} />
         </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
