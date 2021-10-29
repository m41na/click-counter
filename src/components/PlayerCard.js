import React from "react";
import PropTypes from "prop-types";

const maxLen = 6;

export default function PlayerCard ({ name }) {
  const truncate = str => {
    return str && (str.length > maxLen)
      ? str.substring(0, maxLen)
      : str;
  };

  return (
        <div className="card">
            <span className="content name">{truncate(name)}</span>
        </div>
  );
}

PlayerCard.propTypes = {
  name: PropTypes.string
};
