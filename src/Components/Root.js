import React from "react";

import Home from "./Home";
import Search from "./Search";
import NewDataSource from "./NewDataSource";
import Header from "../Components/header_footer/Header";
import Schema from "../Components/MetaCompoments/Schema";
import { Route, Switch, Link } from "react-router-dom";
import ColumnDefinition from "./MetaCompoments/ColumnDefintion";
import "../App.css";
import DataSource from "./MetaCompoments/DataSource";
import Extract from "./MetaCompoments/Extract";

const pageNotFound = () => (
  <div className="page_not_found_wrapper">
    <div style={{ display: "inline-block" }}>
      <h1> Page not found, Please Navigate to Home page!</h1>
      <Link to="/Home">Home</Link>
    </div>
  </div>
);
const Root = () => {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route component={Search} exact path="/Search"></Route>
        <Route component={NewDataSource} exact path="/NewDataSource"></Route>
        <Route component={Schema} exact path="/Schema"></Route>
        <Route
          component={ColumnDefinition}
          exact
          path="/ColumnDefinition"
        ></Route>
        <Route component={Home} exact path="/home"></Route>
        <Route component={Extract} exact path="/Extract"></Route>
        <Route component={DataSource} exact path="/creationWizard"></Route>

        <Route component={pageNotFound}></Route>
      </Switch>
    </div>
  );
};

export default Root;
