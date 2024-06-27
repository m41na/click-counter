import { useState } from "react";
import useSocketio from "./useSocketio";

export default (initialData) => {
  const [state, setState] = useState(initialData);
  const socket = useSocketio(state, setState);

  const setVote = (vote) => {
    setState({ ...state, vote });
    const { player, scrumId } = state;
    socket.emit("submit_vote", { player, room: scrumId, vote });
  };

  const setError = (errorMsg) => {
    const error = typeof errorMsg === "string" && errorMsg.trim().length > 0;
    setState({ ...state, error, errorMsg });
  };

  const setScrumId = (scrumId) => {
    setState({ ...state, scrumId, userType: "organizer" });
  };

  const setUserType = (userType) => {
    setState({ ...state, userType });
  };

  const sendQuestion = (question) => {
    setQuestion(question);
    socket.emit("submit_question", { scrumId: state.scrumId, question });
  };

  const setParticipant = (partipant) => {
    const info = partipant.split("@");
    setState({ ...state, player: info[0], userType: "participant", scrumId: info[1] });
  };

  const setQuestion = (question) => {
    setState({ ...state, question });
  };

  const endScrum = (scrumId) => {
    socket.emit("end_scrum", scrumId);
    setState({ ...state, votes: [], players: [], scrumId: "" });
  };

  const publishVotes = () => {
    console.log("publishing votes");
  };

  const resetVotes = () => {
    console.log("resetting votes");
  };

  return { state, setState, setVote, setError, setScrumId, setUserType, setQuestion, setParticipant, sendQuestion, endScrum, publishVotes, resetVotes };
};
