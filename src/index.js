import React from "react";
import ReactDOM from "react-dom";
import funnel from "./funnel.svg";

import "./styles.css";

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
  return (
    <div
      className="flex flex-auto justify-center align-center w-30"
      style={{ minHeight: "100vmin", minWidth: 350 }}
    >
      <img src={funnel} />
    </div>
  );
}

function Right() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div
      className="flex flex-auto justify-center center pa4"
      style={{
        minHeight: "100vh"
      }}
    >
      <div className="measure flex flex-column justify-center">
        <h1 className="f3 mv4">
          Pledge to swap your Tether for TrueUSD on Tron
          <br />
          <small className="o-50">
            No fees, 1:1 swap for the first $50 million
          </small>
        </h1>
        {!submitted && <PledgeForm onSubmit={() => setSubmitted(true)} />}
        {submitted && (
          <>
            <hr className="mv4" />
            <Thanks />
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      className="sans-serif center"
      style={{
        maxWidth: 1420
      }}
    >
      <img
        src="https://static-truecoin.trusttoken.com/trusttoken-logo.2689f451.svg"
        className="absolute ma4"
        style={{ width: 160 }}
      />
      <div className="flex flex-wrap">
        <Left />
        <Right />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
