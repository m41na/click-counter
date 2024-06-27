import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SubmitBox ({ sendQuestion }) {
  const [question, setQuestion] = useState("");
  const onSendQuestion = () => {
    sendQuestion(question);
    setQuestion("");
  };

  return (
    <div className="submit-box">
      <textarea defaultValue={question} placeholder="add your question here" onChange={setQuestion} />
      <button type="submit" onClick={onSendQuestion}>Send</button>
    </div>
  );
}

SubmitBox.propTypes = {
  sendQuestion: PropTypes.func
};
