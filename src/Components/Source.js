import React from "react";
import axios from "axios";

export default class SourceList extends React.Component {
  state = {
    sources: [],
  };

  componentDidMount() {
    console.log("Checking componet Did mount");
    axios.get(`http://localhost:5000/getSource`).then((res) => {
      const sources = res.data;
      console.log(sources);
      this.setState({ sources });
    });
  }

  render() {
    return (
      <ul>
        <div>
          {this.state.sources.map((source) => (
            <li>{source.data_source_id}</li>
          ))}
        </div>
      </ul>
    );
  }
}
