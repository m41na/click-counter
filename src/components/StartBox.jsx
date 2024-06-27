import React from "react";
import PropTypes from "prop-types";

export default function StartBox ({ selectedType }) {
  return (
    <div className="start-box">
      <button type="button" className="btn-left" onClick={() => selectedType("organizer")}>Organizer</button>
      <button type="button" className="btn-right" onClick={() => selectedType("participant")}>Participant</button>
    </div>
  );
}

StartBox.propTypes = {
  selectedType: PropTypes.func
};
