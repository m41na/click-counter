import React, { useState } from "react";
import PropTypes from "prop-types";

export default function VoteCard ({ vote, setVote }) {
  const [value, setValue] = useState("");

  const submitVote = e => {
    if (e.key === "Enter") {
      const vote = value;
      setValue("");
      setVote(vote);
    }
  };

  return (
        <div className="card">
            <input type="text" className="content value" autoFocus onChange={e => setValue(e.target.value)} value={value || vote} onKeyPress={submitVote} />
        </div>
  );
}

VoteCard.propTypes = {
  vote: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  setVote: PropTypes.func
};
