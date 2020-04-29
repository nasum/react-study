import React from "react";
import ReactDOM from "react-dom";

function ToDo() {
  return <div>Use React</div>;
}

export function init() {
  ReactDOM.render(<ToDo />, document.getElementById("app"));
}
