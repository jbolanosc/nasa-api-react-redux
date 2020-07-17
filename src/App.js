import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import store from "./store";
import MainContainer from "./components/Container";

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <MainContainer />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
