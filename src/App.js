import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="content">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/*" element={<NoPage />} />
         </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
