import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

export default function Navbar() {
  // State for managing the menu icon and whether the menu is open or not
  const [navbarIcon, setNavbarIcon] = useState("fas fa-bars");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu and its animations
  const toggleMenu = () => {
    // Toggle the menu icon between 'fas fa-bars' and 'fas fa-times'
    setNavbarIcon(prevIcon => (prevIcon === "fas fa-bars" ? "fas fa-times" : "fas fa-bars"));

    // Toggle the menu open/close state
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`Navbar`}>
      <div className='rightSideNav'>
        <span>Stavros M.</span>
        <i className={`fas ${navbarIcon}`} onClick={toggleMenu}></i>
      </div>

      <div
        className={`leftSideNav ${menuOpen ? 'active' : ''}`}
      >
        <ul className='navLinks'>
          <li><Link to='/#' onClick={toggleMenu} smooth>Home</Link></li>
          <li><Link to='/#about' onClick={toggleMenu} smooth>About</Link></li>
          <li><Link to='/#skills' onClick={toggleMenu} smooth>Skills</Link></li>
          <li><Link to='/#projects' onClick={toggleMenu} smooth>Projects</Link></li>
          <li><Link to='/#contact' onClick={toggleMenu} smooth>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
