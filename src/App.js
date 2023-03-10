import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> 
      </Router>
        
    </div>
  );
}

export default App;
