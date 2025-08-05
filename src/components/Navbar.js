
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/landing">Landing</Link>
      <Link to="/transactions">Transactions</Link>
    </nav>
  );
}
