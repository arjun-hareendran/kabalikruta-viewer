import React from "react";
import "../App.css";
import test from "../Resources/image/test.jpeg";

export class Home extends React.Component {
  render() {
    const mystyle = {
      position: "absolute",
      minHeight: "100%",
      minWidth: "100%",
      width: "100%",
      height: "auto",
      position: "absolute",
    };

    return (
      <div className="welcome_wrapper">
        <img src={test} style={mystyle} />
      </div>
    );
  }
}

export default Home;
