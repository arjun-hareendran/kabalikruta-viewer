import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import "../../App.css";

class Schema extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="column_details_wrapper">
        {this.props.columndtl.map((x) => (
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
              disabled={true}
              variant="outlined"
              value={x.columnid}
              size="small"
              style={{ paddingRight: "20px" }}
            />
            <TextField
              id="outlined-basic"
              disabled={true}
              variant="outlined"
              value={x.columnName}
              size="small"
              style={{ paddingRight: "20px" }}
            />

            <TextField
              id="outlined-basic"
              disabled={true}
              variant="outlined"
              value={x.columnDataType}
              size="small"
              style={{ paddingRight: "20px" }}
            />

            <TextField
              id="outlined-basic"
              disabled={true}
              variant="outlined"
              value={x.englishComment}
              size="small"
              style={{ paddingRight: "20px" }}
            />

            <TextField
              id="outlined-basic"
              disabled={true}
              variant="outlined"
              value={x.germanComment}
              size="small"
              style={{ paddingRight: "20px" }}
            />

            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              style={{ marginLeft: "20px" }}
              onClick={this.props.onDelete}
            >
              Delete
            </Button>
          </div>
        ))}
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
    onDelete: () => dispatch({ type: actionTypes.DELETE_COLUMN }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schema);
