import React, { useState } from "react";
import PropTypes from "prop-types";

export default function PublishBtn ({ publishVotes, resetVotes }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) publishVotes(); else resetVotes();
    setOpen(!open);
  };

  return (
    <div className="publish-box">
      <a href="#" className={`publish-toggle ${open ? "send" : "reset"}`} onClick={handleClick}>
        <i>{open ? "publish" : "reset"}</i>
      </a>
    </div>
  );
}

PublishBtn.propTypes = {
  resetVotes: PropTypes.func,
  publishVotes: PropTypes.func
};
