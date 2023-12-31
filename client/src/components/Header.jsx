import { useEffect, useState } from "react";
import styles from "../components/Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
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
          <NavLink to="/blogPage">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
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
