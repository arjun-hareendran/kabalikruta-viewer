import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import "../App.css";

const Search = () => {
  return (
    <div className="home_wrapper">
      <InputLabel variant="outlined">
        Please enter the data source name
      </InputLabel>
      <div className="pannel">
        <div className="pannel_content">
          <div className="ui_elements">
            <TextField
              id="outlined-basic"
              label="Data Source Name"
              variant="outlined"
              style={{ marginRight: "10px" }}
            ></TextField>
            <Button
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
