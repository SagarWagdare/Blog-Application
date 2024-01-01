import { useEffect, useState } from "react";
import styles from "../components/Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation()
  console.log("👉 ~ file: Header.jsx:6 ~ Header ~ location⭐", location.pathname)
  const locationPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <h1>
        <NavLink to="/">Blog App</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/blogs" className={locationPath==="/blogs"?"text-teal-400":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us" className={locationPath==="/about-us"?"text-teal-400":""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={locationPath==="/contact"?"text-teal-400":""}>Contact</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
