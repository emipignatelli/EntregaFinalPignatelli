import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ children }) {
  return (
    <nav>
      <ul className="navbar-list">
        
        {children}
      </ul>
    </nav>
  );
}