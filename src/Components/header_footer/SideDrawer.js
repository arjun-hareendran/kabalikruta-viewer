import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import DataSource from "../MetaCompoments/DataSource";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      durration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button component={Link} to="/Home">
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/Search">
          <ListItemText primary="Search" />
        </ListItem>

        <ListItem button component={Link} to="/Schema">
          <ListItemText primary="Schema" />
        </ListItem>

        <ListItem button component={Link} to="/ColumnDefinition">
          <ListItemText primary="ColumnDefinition" />
        </ListItem>

        <ListItem button component={Link} to="/creationWizard">
          <ListItemText primary="Wizard" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
