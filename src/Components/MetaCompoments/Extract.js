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
import MaterialTable from "material-table";
import { useForm } from "react-hook-form";

class Extract extends Component {
  withStyles = {
    width: "150px",
    marginRight: "20px",
  };

  //const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  render() {
  

    return (
      <div className="extract_wrapper">
        <div>
          Please enter the list of extract files for the source :{" "}
          {this.props.SourceDetailsdtl.dataSourceId}
        </div>
        <div
          style={{
            position: "relative",
            top: 20,
            display: "inline-block",
            marginBottom: "15px",
          }}
        >
          <div className="label_wrapper">
            <div className="label_content_wrapper">
              <label>Extract Id</label>
            </div>

            <div className="label_content_wrapper">
              <label>Extract Name</label>
            </div>

            <div className="label_content_wrapper">
              <label>Extract Type</label>
            </div>

            <div className="label_content_wrapper">
              <label>Extract Location</label>
            </div>

            <div className="label_content_wrapper">
              <label>Extract Load type</label>
            </div>

            <div className="label_content_wrapper">
              <label>Extract Frequency</label>
            </div>

            <div className="label_content_wrapper">
              <label>Extract Description</label>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="extractid"
              type="text"
              label="extractid"
              style={this.withStyles}
              ref={register}
            />
            <input
              name="extract_name"
              type="text"
              label="extract_name"
              style={this.withStyles}
              ref={register}
            />
            <input
              name="extract_type"
              type="text"
              label="extract_type"
              style={this.withStyles}
              ref={register}
            />
            <input
              name="extract_location"
              type="text"
              label="extract_location"
              style={this.withStyles}
              ref={register}
            />
            <input
              name="extract_load_type"
              type="text"
              label="extract_load_type"
              style={this.withStyles}
              ref={register}
            />
            <input
              name="extract_frequency"
              type="text"
              label="extract_frequency"
              style={this.withStyles}
              ref={register}
            />
            <input
              name="extract_description"
              type="text"
              label="extract_description"
              style={this.withStyles}
              ref={register}
            />

            <button type="submit">Save</button>
          </form>
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
    addSource: (state) => dispatch(actionCreators.addExtract(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Extract);
