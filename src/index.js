import React from "react";
import ReactDOM from "react-dom";
import funnel from "./funnel.svg";

import "./styles.css";
import "./hubspot.css";

function PledgeForm({ onSubmit }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="center measure">
        <label className="db mt1">
          Name
          <br />
          <input className="mt1 w-100" />
        </label>
        <br />
        <label className="db mt1">
          Email
          <br />
          <input className="mt1 w-100" />
        </label>
        <br />
        <label className="db mt1">
          Tether Address <span className="o-50">(ERC20, TRC20, OMM)</span>
          <br />
          <input className="mt1 w-100" />
        </label>
        <br />
        <label className="db mt1">
          Amount
          <br />
          <input className="mt1 w-100" />
        </label>
        <br />
        <div className="tr">
          <button type="submit" className="submit-btn">
            Pledge
          </button>
        </div>
      </div>
    </form>
  );
}

function Thanks() {
  return (
    <div>
      <h1 className="f5 mv2">Thanks! Now share your pledge</h1>
      <div>
        <button className="mr2">Twitter</button>{" "}
        <button className="mr2">Reddit</button>{" "}
        <button className="mr2">Facebook</button> <button>Phone</button>
      </div>
    </div>
  );
}

function Left() {
  return <img src={funnel} className="funnel" />;
}

const rootElement = document.getElementById("left-root");
ReactDOM.render(<Left />, rootElement);
