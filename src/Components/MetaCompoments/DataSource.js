import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { InputLabel } from "@material-ui/core";
import "../../App.css";
import * as actionCreators from "../../store/actions/actions";
import { Route, Switch, Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

class DataSource extends Component {
  state = {
    dataSourceId: "",
    dataSourceName: "",
    dataSourceVersion: "",
    dataSourceDescription: "",
    contactPerson: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="home_wrapper">
        <div style={{ display: "inline-block", marginBottom: "15px" }}>
          <div
            style={{
              width: "200px",
              display: "inline-block",
            }}
          >
            <InputLabel>Data Source ID</InputLabel>
          </div>
          <div style={{ display: "inline-block" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="dataSourceId"
              size="large"
              fullWidth="true"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.dataSourceId}
            />
          </div>
        </div>
        <div></div>
        <div style={{ display: "inline-block", marginBottom: "15px" }}>
          <div
            style={{
              width: "200px",
              display: "inline-block",
            }}
          >
            <InputLabel>Data Name</InputLabel>
          </div>
          <div style={{ display: "inline-block" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="dataSourceName"
              size="large"
              fullWidth="true"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.dataSourceName}
            />
          </div>
        </div>
        <div></div>
        <div style={{ display: "inline-block", marginBottom: "15px" }}>
          <div
            style={{
              width: "200px",
              display: "inline-block",
            }}
          >
            <InputLabel style={{ paddingRight: "20px" }}>
              Data Source Version
            </InputLabel>
          </div>

          <div style={{ display: "inline-block" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="dataSourceVersion"
              size="large"
              fullWidth="true"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.dataSourceVersion}
            />
          </div>
        </div>
        <div></div>
        <div style={{ display: "inline-block", marginBottom: "15px" }}>
          <div
            style={{
              width: "200px",
              display: "inline-block",
            }}
          >
            <InputLabel style={{ paddingRight: "20px" }}>
              Description
            </InputLabel>
          </div>
          <div style={{ display: "inline-block" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="dataSourceDescription"
              size="large"
              fullWidth="true"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.dataSourceDescription}
            />
          </div>
        </div>
        <div></div>
        <div style={{ display: "inline-block", marginBottom: "15px" }}>
          <div
            style={{
              width: "200px",
              display: "inline-block",
            }}
          >
            <InputLabel style={{ paddingRight: "20px" }}>
              Contact Person
            </InputLabel>
          </div>
          <div style={{ display: "inline-block" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="contactPerson"
              size="large"
              fullWidth="true"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.contactPerson}
            />
          </div>
        </div>
        <div></div>
        <div
          style={{
            position: "relative",
            top: "3%",
            left: "50%",
            width: "600",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            onClick={() => this.props.addSource(this.state)}
          >
            Save
          </Button>
          <Link to="/Extract">
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: "20px" }}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SourceDetailsdtl: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSource: (state) => dispatch(actionCreators.addSource(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSource);
