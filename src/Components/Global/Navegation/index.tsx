import React, { useState, useEffect } from "react";
import logoKuro from "Assets/Images/logoKuro.svg";
import { bindActionCreators } from "redux";
import { ThemeCreators } from "Storage";
import { useDispatch, useSelector } from "react-redux";
import { StateReducer } from "Interfaces/Reducer";
import { useNavigate } from "react-router-dom";
import styles from "./Navegation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

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
    <div className={styles.gradient}>
      <div className={styles.container}>
        <div className={styles.navegationLogo}>
          <h1>Kuro Design</h1>
        </div>
        <div className={styles.navegationLinks}>
          <div className={styles.containerSwitch}>
            <FontAwesomeIcon
              // icon={faSun}
              icon={faMoon}
              size="lg"
              style={{ color: "white" }}
              className={styles.icon}
            />
          </div>
          <input className={styles.switch} type="checkbox" id="switch" />
          <label
            className={styles.switchclick}
            htmlFor="switch"
            onClick={handleChangeTheme}
          >
            Change {theme} theme
          </label>
          <div className={styles.containerSwitch}>
            <FontAwesomeIcon
              icon={faSun}
              // icon={faMoon}
              size="lg"
              style={{ color: "white" }}
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navegation;
