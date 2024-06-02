import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { useEffect, useState } from "react";
import { Logout } from "../Logout/Logout";

export default function Navigation() {
  const isActiveLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div>
      <h1 className={css.title}>
        Notes App <MdOutlineStickyNote2 />
      </h1>

      <nav>
        <div className={css.navigationLinks}>
          <NavLink className={isActiveLink} to="/">
            Home
          </NavLink>
          {isAuthenticated && (
            <NavLink className={isActiveLink} to="/notes">
              Notes
            </NavLink>
          )}
        </div>
        {isAuthenticated ? (
          <Logout></Logout>
        ) : (
          <div className={css.navigationLinks}>
            <NavLink className={isActiveLink} to="/register">
              Register
            </NavLink>
            <NavLink className={isActiveLink} to="/login">
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
