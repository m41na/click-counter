import React from "react";
import PropTypes from "prop-types";

export default function QueCard ({ question }) {
  return (
    <div className="que-box">
      <textarea readOnly defaultValue={question} placeholder="question details"></textarea>
    </div>
  );
}

QueCard.propTypes = {
  question: PropTypes.string
};
