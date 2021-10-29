import React, { useState } from "react";
import PropTypes from "prop-types";

export default function JoinBox ({ state, setParticipant }) {
  const [player, setPlayer] = useState("");
  const [open, setOpen] = useState(false);
  const symbol = open => open ? <i>&lt;</i> : <i>&gt;</i>;

  return (
    <form className="join-box">
        <span className={`generate-toggle ${open ? "close" : "open"}`} onClick={() => setOpen(!open)}>{symbol(open)}</span>
        {open && <input type="text" placeholder="username@scrum_id" value={player} onChange={e => setPlayer(e.target.value)} />}
        {open && <input type="button" value="Join" onClick={() => setParticipant(player)} />}
        {state.error && <div className="form-error">{state.errorMsg}</div>}
    </form>
  );
}

JoinBox.propTypes = {
  state: PropTypes.shape({
    error: PropTypes.bool,
    errorMsg: PropTypes.string
  }),
  setParticipant: PropTypes.func
};
