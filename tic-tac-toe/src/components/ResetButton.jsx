import React from "react";

import "./ResetButton.css";
import { Link } from "react-router-dom";

export const ResetButton = ({ resetBoard }) => {
  return (
    <div>
      <button className="reset-btn" onClick={resetBoard}>
        Reset
      </button>

      <Link to="/">
        <button className="reset-btn">New Game</button>
      </Link>
    </div>
  );
};
