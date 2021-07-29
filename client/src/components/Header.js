import React, { useContext } from "react";
import ButtonOldWay from "./lib/ButtonOldWay";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      Website
      <ButtonOldWay title="Toggle Theme" role="theme" onClick={toggleTheme} />
      <Link to="/">Home</Link>
      <Link to="/credentials">Credentials</Link>
    </nav>
  );
}

export default Header;
