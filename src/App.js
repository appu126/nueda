import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';
import Transactions from './pages/Transactions';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;