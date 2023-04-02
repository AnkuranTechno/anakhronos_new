import React, { useState, useEffect } from 'react';
import { Button } from '../../components';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import useIsMobile from '../../hooks/useMobile';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = ({navLinks ,logo}) => {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggle, setToggle] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setShow(
        window.scrollY > lastScrollY && window.scrollY > 100 ? false : true
      );
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${show ? 'navbar--show' : 'navbar--hide'} ${
        lastScrollY > 100 ? 'navbar--shadow' : 'navbar--no-shadow'
      } ${isMobile && 'navbar--mobile'}`}
    >
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        {isMobile ? (
          <div className="navbar__actions navbar__actions--mobile-only">
            <Button type="solid" text="Login" />
            {!toggle && (
              <div className="navbar__toggle-btn hamburger">
                <FaBars onClick={() => setToggle(!toggle)} />
              </div>
            )}

            {toggle && (
              <div className="navbar__toggle-btn cross">
                <HiX onClick={() => setToggle(!toggle)} />
              </div>
            )}

            {toggle && (
              <ul className="navbar__menu navbar__menu--mobile-only">
                {navLinks.map((link) => (
                  <li className="navbar__menu-item" key={link.name}>
                    <Link to={link.link} onClick={() => setToggle(!toggle)}>
                      {link.name}  
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="navbar__actions">
            <ul className="navbar__menu">
              {navLinks.map((link) => (
                <li className="navbar__menu-item" key={link.name}>
                  <Link to={link.link}> {link.name} </Link>
                </li>
              ))}
            </ul>
            <Link to="/login">
            <Button type="solid" text="Login" />
            </Link>
            <Link to ="/signup">
            <Button type="solid" text="SignUp" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
