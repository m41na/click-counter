import React from "react";
import PropTypes from "prop-types";

export default function ScoreCard ({ value, name }) {
  return (
        <div className="card">
            <i className="caption">{name}</i>
            <span className="content value">{value}</span>
        </div>
  );
}

ScoreCard.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string
};
