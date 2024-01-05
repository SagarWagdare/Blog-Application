import { useEffect, useState } from "react";
import styles from "../components/Header.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../config";
import { persistor } from ".././app/store";
import { signOut } from "../features/userSlice";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const userId = useSelector((c) => c.user.userId);
  const locationPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((c) => c.user?.user);
  const [userImage, setUserImage] = useState(user?.image);
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
    setIsToken(null);
    dispatch(signOut())
    // persistor.purge();
    navigate("/");
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
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex rounded-full justify-center gap-x-1.5 bg-black text-white mr-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 ">
              {userImage ? (
                <img
                  className="w-10 h-10 rounded-full object-cover border-white"
                  src={`${API_BASE_URL}/${userImage}`}
                  alt={userImage}
                />
              ) : (
                <FaRegUserCircle className="text-3xl" />
              )}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                        className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      to={`/profile/${userId}`}
                    >
                      My profile
                    </NavLink>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings <span className="text-gray-400">comingsoon!</span>

                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
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
