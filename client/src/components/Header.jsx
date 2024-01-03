import { useEffect, useState } from "react";
import styles from "../components/Header.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    const token = localStorage.getItem("token");
    setIsToken(token);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    // setIsToken(null);
    navigate("/")
    
  };
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <h1>
        <NavLink to="/">Blog App</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={locationPath === "/" ? "text-teal-400" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={locationPath === "/about-us" ? "text-teal-400" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={locationPath === "/contact" ? "text-teal-400" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {isToken ? (
        <ul>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">signup</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
