import React, { useEffect } from "react";
import io from "socket.io-client";
import { initialData } from "./AppContext";

const socket = io("http://localhost:5000", {
  path: "/play"
});

export default (state, setState) => {
  const { userType, scrumId, player } = state;

  useEffect(() => {
    if (scrumId) {
      // establish connection

      if (userType === "organizer") {
        // join room
        socket.emit("join_scrum", { player: "organizer", room: scrumId });

        // register handlers
        socket.on("vote_submitted", data => {
          console.log(`vote submitted details: ${JSON.stringify(data)}`);
          updateVotes(data);
        });

        socket.on("player_joined", player => {
          console.log("new player joined", player);
          updatePlayers(player);
        });
      }

      if (userType === "participant") {
        // join room
        socket.emit("join_scrum", { player, room: scrumId });

        // registers handlers
        socket.on("current_votes", data => {
          console.log(`updates for most recent votes: ${JSON.stringify(data)}`);
          setVotes(data);
        });

        socket.on("current_players", data => {
          console.log(`current joined players: ${JSON.stringify(data)}`);
          setPlayers(data);
        });

        socket.on("current_question", data => {
          console.log(`current active question: ${JSON.stringify(data)}`);
          setQuestion(data.question);
        });

        socket.on("scrum_ended", scrumId => {
          console.log(`current scrum has ended: ${scrumId}`);
          resetState();
        });
      }
    }
    return () => {
      if (socket) {
        console.log("cleanup opportunity :-)");
        // socket.close();
      }
    };
  }, [userType, scrumId, player]);

  const setPlayers = (players) => {
    setState({ ...state, players });
  };

  const setVotes = (votes) => {
    setState({ ...state, votes });
  };

  const setQuestion = (question) => {
    setState({ ...state, question });
  };

  const resetState = () => {
    setState(initialData);
  };

  const updateVotes = (vote) => {
    setState(state => {
      const idx = state.votes.findIndex(item => vote.player === item.player);
      if (idx === -1) {
        const votes = [...state.votes, vote];
        socket.emit("updated_votes", { scrumId, votes });
        return ({ ...state, votes });
      } else {
        const votes = state.votes.map(item => item.player === vote.player ? vote : item);
        socket.emit("updated_votes", { scrumId, votes });
        return ({ ...state, votes });
      }
    });
  };

  const updatePlayers = (joined) => {
    setState(state => {
      if (state.players.findIndex(item => joined.player === item.player) === -1) {
        const players = [...state.players, joined];
        socket.emit("players_list", { scrumId, players });
        return ({ ...state, players });
      } else {
        socket.emit("players_list", { scrumId, players: state.players });
        return state;
      }
    });
  };

  return socket;
};
