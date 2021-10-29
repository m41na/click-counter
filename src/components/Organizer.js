import React, { useContext, useState } from "react";
import { AppContext } from "../state/AppContext";
import PlayerCard from "./PlayerCard";
import SubmitBox from "./SubmitBox";
import PublishBtn from "./PublishBtn";

export function generateRandomLetter () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function generateId (numeral) {
  return `${generateRandomLetter()}-${numeral}-${generateRandomLetter()}`;
}

export default function Organizer () {
  const { state, sendQuestion, setScrumId, endScrum, publishVotes, resetVotes } = useContext(AppContext);
  const [generated, setGenerated] = useState("");

  const onGenerateId = () => {
    const value = generateId(new Date().getTime());
    setGenerated(value);
    setScrumId(value);
  };

  const onEndScrum = () => {
    setGenerated("");
    endScrum(generated);
  };

  return (
    <>
      {state.votes.length > 0 && <PublishBtn publishVotes={publishVotes} resetVotes={resetVotes} />}
      <form className="organizer-box">
        <span className="generated">{state.scrumId}</span>
        {!generated && <button type="button" onClick={onGenerateId}>Invite</button>}
        {generated && <button type="button" className="btn-close" onClick={onEndScrum}>Close</button>}
      </form>

      {state.scrumId && <SubmitBox sendQuestion={sendQuestion} />}
      {state.players.map((item, key) => {
        return <PlayerCard key={key} name={item.player} />;
      })}
    </>
  );
}
