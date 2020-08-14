import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import "../../App.css";
import Schema from "../MetaCompoments/Schema";

class ColumnDefiniton extends Component {
  state = {
    columnName: "",
    dataType: "",
    englishComments: "",
    germanComments: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="column_details_wrapper">
          <div
            style={{
              marginBottom: "20px",
              marginLeft: "30px",
              marginRight: "10px",
              display: "inline-block",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Column Name"
              size="small"
              name="columnName"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.columnName}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Data type"
              name="dataType"
              size="small"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.dataType}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Description in english"
              name="englishComments"
              size="small"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.englishComments}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Description in german"
              name="germanComments"
              size="small"
              style={{ paddingRight: "20px" }}
              onChange={this.handleChange}
              value={this.state.germanComments}
            />

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
              style={{ marginLeft: "20px" }}
              onClick={() =>
                this.props.onAdd(
                  this.state.columnName,
                  this.state.dataType,
                  this.state.englishComments,
                  this.state.germanComments
                )
              }
            >
              Save
            </Button>
          </div>
        </div>
        <div>
          <Schema></Schema>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    columndtl: state.sourcelist[0].columndetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (columnName, columnDataType, englishComment, germanComment) =>
      dispatch({
        type: actionTypes.ADD_COLUMN,
        payload: { columnName, columnDataType, englishComment, germanComment },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnDefiniton);
