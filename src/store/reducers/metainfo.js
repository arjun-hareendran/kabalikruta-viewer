import * as actionTypes from "../actions/actions";

const initialState = {
  dataSourceId: "",
  dataSourceName: "",
  dataSourceVersion: "",
  dataSourceDescription: "",
  contactPerson: "",
  sourcelist: [
    {
      extractname: "extractname-01",
      maxColumnId: 0,
      columndetails: [],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLUMN: {
      const newState = Object.assign({}, state);
      const columnId = newState.sourcelist[0].maxColumnId + 1;
      let columndetailsClone = state.sourcelist[0].columndetails.slice(0);
      newState.sourcelist[0].columndetails = columndetailsClone.concat({
        columnid: state.sourcelist[0].maxColumnId + 1,
        columnName: action.payload.columnName,
        columnDataType: action.payload.columnDataType,
        englishComment: action.payload.englishComment,
        germanComment: action.payload.germanComment,
      });
      newState.sourcelist[0].maxColumnId = columnId;
      return newState;
    }

    case actionTypes.DELETE_COLUMN: {
      const newState = Object.assign({}, state);
      return newState;
    }

    case actionTypes.GET_SOURCE: {
      const newState = Object.assign({}, state);
      console.log("inside get soruce");
      console.log(action.payload);
      return newState;
    }

    case actionTypes.ERROR: {
      const newState = Object.assign({}, state);
      console.log("inside error");
      return newState;
    }

    case actionTypes.ADD_SOURCE: {
      const newState = Object.assign({}, state);
      console.log(action.payload);
      newState.dataSourceId = action.payload.dataSourceId;
      newState.dataSourceName = action.payload.dataSourceName;
      newState.dataSourceVersion = action.payload.dataSourceVersion;
      newState.dataSourceDescription = action.payload.dataSourceDescription;
      newState.contactPerson = action.payload.contactPerson;
      return newState;
    }
  }
  return state;
};

export default reducer;
