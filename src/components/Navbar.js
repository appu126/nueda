import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">🏠 Home</Link>
      <Link to="/landing" className="nav-link">📊 Landing</Link>
      <Link to="/transactions" className="nav-link">💳 Transactions</Link>
    </nav>
  );
}

