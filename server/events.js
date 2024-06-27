const socketOrigin = process.env.SOCKET_ORIGIN || "http://localhost:3000"; // default origin

module.exports = function (server) {
  // initialize web socket
  const socketio = require("socket.io");
  const io = socketio(server, {
    path: "/play",
    cors: {
      origin: [socketOrigin]
    }
  });

  io.on("connection", socket => {
    console.log(`connection ${socket.id} was established`);

    socket.on("join_scrum", data => {
      console.log(`socker id ${socket.id} joining scrum - ${JSON.stringify(data)}`);
      socket.join(data.room);
      socket.to(data.room).emit("player_joined", data);
    });

    socket.on("submit_question", data => {
      console.log(`socket ${socket.id} submitted question - ${JSON.stringify(data)}`);
      socket.to(data.scrumId).emit("current_question", data);
    });

    socket.on("submit_vote", data => {
      console.log(`socket ${socket.id} submitted vote - ${JSON.stringify(data)}`);
      socket.to(data.room).emit("vote_submitted", data);
    });

    socket.on("players_list", data => {
      console.log(`socket ${socket.id} sent updated players list for room ${data.scrumId} - ${JSON.stringify(data)}`);
      socket.to(data.scrumId).emit("current_players", data.players);
    });

    socket.on("updated_votes", data => {
      console.log(`socket ${socket.id} sent updated votes for room ${data.scrumId} - ${JSON.stringify(data)}`);
      socket.to(data.scrumId).emit("current_votes", data.votes);
    });

    socket.on("end_scrum", scrumId => {
      console.log(`socket ${socket.id} is ending the scrum - ${scrumId}`);
      socket.to(scrumId).emit("scrum_ended", scrumId);
    });

    socket.on("disconnect", () => {
      console.log(`socket id ${socket.id} left the scrum`);
    });
  });
};
