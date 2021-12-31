import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Featured from './Pages/Featured';
import LatestWork from './Pages/LatestWork';
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Featured" element={<Featured/>} />
          <Route path='/Latest-Work' element={<LatestWork/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
