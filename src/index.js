import React from "react";
import ReactDOM from "react-dom";
import funnel from "./funnel.svg";

import "./styles.css";
import "./hubspot.css";

function Left() {
  return <img src={funnel} className="funnel" />;
}

const rootElement = document.getElementById("left-root");
ReactDOM.render(<Left />, rootElement);
