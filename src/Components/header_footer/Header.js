import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class header extends Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value,
      headerShow: false,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrol);
  }

  handleScrol = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "black" : "black",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <ToolBar>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={(value) => this.toggleDrawer(value)}
          >
            <MenuIcon>Metadata</MenuIcon>
          </IconButton>
          <Typography variant="h5">Smart Data Layer</Typography>
        </ToolBar>
        <SideDrawer
          open={this.state.drawerOpen}
          onClose={(value) => this.toggleDrawer(value)}
        ></SideDrawer>
      </AppBar>
    );
  }
}

export default header;
