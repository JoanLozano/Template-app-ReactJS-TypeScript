import React, { useEffect } from "react";
import Navegation from "./Components/Global/Navegation/index";
import Footer from "./Components/Global/Footer/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "Routes";
import 'Assets/CSS/index.css';
import { ThemeProvider } from "@mui/material/styles";
import themeMaterial, { darkTheme } from "Assets/Config/Material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AlertCreators, ThemeCreators } from "Storage";
import { StateReducer } from "Interfaces/Reducer";
import useLocalStorage from "use-local-storage";

function App() {
  const dispatch = useDispatch();

  const { closeAlert } = bindActionCreators(AlertCreators, dispatch);
  const { changeTheme } = bindActionCreators(ThemeCreators, dispatch);

  const { alert: modal, theme: themeReducer } = useSelector(
    (state: StateReducer) => state
  );

  const defaultDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    if (themeReducer.theme !== "" && themeReducer.theme !== theme) {
      setTheme(themeReducer.theme);
    }

    if (themeReducer.theme === "" && (theme === "dark" || theme === "light")) {
      changeTheme({
        theme: theme,
      });
    }
    window.scrollTo(0, 0);
  }, [themeReducer.theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : themeMaterial}>
      <BrowserRouter>
        <div className="root" data-theme={theme}>
          <Navegation />
          <div className="container">
            <Routes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
