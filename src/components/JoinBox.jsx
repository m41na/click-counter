import React, { useState } from "react";
import PropTypes from "prop-types";

export default function JoinBox ({ state, setError, setParticipant }) {
  const [player, setPlayer] = useState("");
  const [scrumId, setScrumId] = useState("");

  function onSetParticipant (username, scrum) {
    if (!username) {
      setError("a username is required (max length of 6)");
      return;
    }
    if (!scrum) {
      setError("a scrum id is required");
      return;
    }
    setError("");
    setParticipant(`${username}@${scrum}`);
  }

  return (
    <form className="participant-box">
      <input type="text" className="scrum_player" placeholder="username" size="6" value={player} onChange={e => setPlayer(e.target.value)} />
      <span className="seperator">@</span>
      <input type="text" className="scrum_id" placeholder="scrum_id" value={scrumId} onChange={e => setScrumId(e.target.value)} />
      <input type="button" value="Join" onClick={() => onSetParticipant(player, scrumId)} />
      {state.error && <div className="form-error">{state.errorMsg}</div>}
    </form>
  );
}

JoinBox.propTypes = {
  state: PropTypes.shape({
    error: PropTypes.bool,
    errorMsg: PropTypes.string
  }),
  setError: PropTypes.func,
  setParticipant: PropTypes.func
};
