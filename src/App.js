import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";

import routes from "src/routes";
import "./styles/css/fontawesome.css";
import "./styles/css/style.css";

const App = () => {
  const routing = useRoutes(routes());
  return <>{routing}</>;
};

export default App;
