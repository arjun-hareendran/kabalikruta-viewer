import axios from "axios";
export const ADD_COLUMN = "ADD_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const ADD_SOURCE = "ADD_SOURCE";
export const GET_SOURCE = "GET_SOURCE";
export const ERROR = "ERROR";
export const STORE_EXTRACT = "STORE_EXTRACT";

export const addSource = (value) => {
  const params = new URLSearchParams();
  params.append("dataSourceId", value.dataSourceId);
  params.append("dataSourceName", value.dataSourceName);
  params.append("dataSourceVersion", value.dataSourceVersion);
  params.append("dataSourceDescription", value.dataSourceDescription);
  params.append("contactPerson", value.contactPerson);

  return (dispatch) => {
    axios
      .post("http://localhost:5000/addSource", params)
      .then((response) => {
        alert("Data saved");
        console.log("Data from API is ");
        dispatch(storeSource(value));
      })
      .catch((error) => {
        console.log("Error is ");
        console.log(error);
        console.log("Error occured while trying to read MySQL Table");
      });
  };
};

export const storeSource = (value) => {
  return {
    type: ADD_SOURCE,
    payload: value,
  };
};

export const addExtract = (value) => {
  const params = new URLSearchParams();
  params.append("dataSourceId", value.dataSourceId);
  params.append("dataSourceName", value.dataSourceName);
  params.append("dataSourceVersion", value.dataSourceVersion);
  params.append("dataSourceDescription", value.dataSourceDescription);
  params.append("contactPerson", value.contactPerson);

  return (dispatch) => {
    axios
      .post("http://localhost:5000/addSource", params)
      .then((response) => {
        alert("Data saved");
        console.log("Data from API is ");
        dispatch(storeSource(value));
      })
      .catch((error) => {
        console.log("Error is ");
        console.log(error);
        console.log("Error occured while trying to read MySQL Table");
      });
  };
};

export const storeExtract = (value) => {
  return {
    type: STORE_EXTRACT,
    payload: value,
  };
};
