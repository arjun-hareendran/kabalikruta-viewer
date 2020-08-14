import React from "react";
import { BrowserRouter } from "react-router-dom";
import Root from "./Components/Root";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Root></Root>
      </BrowserRouter>
    </div>
  );
}

export default App;
