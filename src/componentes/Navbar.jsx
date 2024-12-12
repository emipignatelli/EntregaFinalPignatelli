import './Navbar.css'
export default function Navbar({ children }) {
  return (
    <nav>
      <ul className="navbar-list">
        {children}
      </ul>
    </nav>
  );
}
  

