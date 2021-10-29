import React, { useContext } from "react";
import { AppContext } from "../state/AppContext";
import VoteCard from "./VoteCard";
import PlayerCard from "./PlayerCard";
import QueCard from "./QueCard";
import JoinBox from "./JoinBox";

export default function Participant () {
  const { state, setError, setVote, setParticipant } = useContext(AppContext);

  return state.players && state.players.length > 0
    ? <>
      <QueCard question={state.question} />
      <VoteCard vote={state.vote} setVote={setVote} />
      {state.players.map((item, key) => {
        return <PlayerCard key={key} name={item.player} />;
      })}
    </>
    : (
      <JoinBox state={state} setError={setError} setParticipant={setParticipant} />
      );
}
