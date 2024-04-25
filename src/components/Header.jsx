import React from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkmode) => !previousDarkmode)
        }
        className="save"
      >
        {darkMode ? (
          <div style={{ display: "flex", alignItems: "center", gap: "3px", padding:"2px"}}>
            <MdSunny size={20}/>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "3px", padding:"2px"}}>
            <MdDarkMode size={20}/>
          </div>
        )}
      </button>
    </div>
  );
};

export default Header;
