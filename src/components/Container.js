import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Photo from "./Photo";
import Landing from "./Landing";

const MainContainer = () => (
  <Fragment>
    <Route path="/" exact component={Landing} />
    <Route path="/mars" component={Photo} />
  </Fragment>
);

export default MainContainer;
