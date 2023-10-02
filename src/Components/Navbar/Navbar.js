import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';


export default function Navbar() {
  const [navbarIcon, setNavbarIcon] = useState("fas fa-bars");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarIcon(prevIcon => (prevIcon === "fas fa-bars" ? "fas fa-times" : "fas fa-bars"));

    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`Navbar`}>
      <div className='rightSideNav'>
        <span>Stavros M.</span>
        <i className={`fas ${navbarIcon}`} onClick={toggleMenu}></i>
      </div>

      <div className={`leftSideNav ${menuOpen ? 'active' : ''}`}>
        <ul className={`navLinks ${menuOpen ? 'active' : ''}`}>
          <li><Link to='/portfolio/#' onClick={toggleMenu} smooth>Home</Link></li>
          <li><Link to='/portfolio/#about' onClick={toggleMenu} smooth>About</Link></li>
          <li><Link to='/portfolio/#skills' onClick={toggleMenu} smooth>Skills</Link></li>
          <li><Link to='/portfolio/#projects' onClick={toggleMenu} smooth>Projects</Link></li>
          <li><Link to='/portfolio/#contact' onClick={toggleMenu} smooth>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
