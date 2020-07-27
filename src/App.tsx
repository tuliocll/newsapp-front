import React from "react";

import Routes from "./routes";
import GlobalStyle from "./assets/styles/global";
import { StateProvider } from "./state/provider/applicationProvider";
import Notifications from "react-notify-toast";

function App() {
  return (
    <StateProvider>
      <Notifications />
      <GlobalStyle />
      <Routes />
    </StateProvider>
  );
}

export default App;
