import MyRoute from "./routers";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/global";

import { useContext } from "react";
import { authContext } from "./provides/auth";

import { MaterialUISwitch } from "./components/ButtonThemeMod";
import { ThemeProvider } from "styled-components";

import "./App.css";

function App() {
  const { theme, setSwitch } = useContext(authContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MaterialUISwitch
          checked={theme.checked}
          className="switch"
          onChange={setSwitch}
        />
        <ToastContainer />
        <GlobalStyle />
        <MyRoute />
      </div>
    </ThemeProvider>
  );
}

export default App;
