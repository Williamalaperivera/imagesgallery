import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Imagenes4 from './components/Imagenes4';
import Imagenes1 from './components/Imagenes1';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
  
      <Routes>
        
        <Route path="/imagenes4" element={<Imagenes4 />} />
        <Route path="/imagenes1" element={<Imagenes1 />} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
