import React, { useState, useEffect } from "react";
import logoKuro from "Assets/Images/logoKuro.svg";

import { bindActionCreators } from "redux";
import { ThemeCreators } from "Storage";
import { useDispatch, useSelector } from "react-redux";
import { StateReducer } from "Interfaces/Reducer";
import { useNavigate } from "react-router-dom";
import styles from "./Navegation.module.css";

const Navegation: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateReducer) => state.theme);
  const { changeTheme } = bindActionCreators(ThemeCreators, dispatch);
  const navigation = useNavigate();

  const handleClickImage = () => navigation("/");

  const handleChangeTheme = () => {
    if (theme === "dark") {
      changeTheme({
        theme: "light",
      });
    } else {
      changeTheme({
        theme: "dark",
      });
    }
  };

  return (
    <nav className={[styles.nav, "shadow"].join("")}>
      {/* Logo  */}
      <img
        src={logoKuro}
        alt="Kuro Design"
        className={styles.img}
        onClick={handleClickImage}
      />
      <div className={styles.containerModes}>
        <div className={styles.modes}>
          <label className={styles.appChange}> Change Theme</label>
          <input className={styles.switch} type="checkbox" id="switch" />
          <label
            className={styles.switchclick}
            htmlFor="switch"
            onClick={handleChangeTheme}
          >
            Change {theme} theme
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
