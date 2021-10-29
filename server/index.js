const express = require("express");
const timeout = require("connect-timeout");
const path = require("path");
const cors = require("cors");
const http = require("http");
const morgan = require("morgan");
const router = require("./routes");

const app = express();

const port = process.env.PORT || 5000; // default port is 5000
const timeOut = process.env.TIME_OUT || 120000;

// initialize application
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(timeout(timeOut));
app.use(router);
app.use(express.static(path.join(__dirname, "../build")));

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);

  // initialize web socket
  const socketio = require("socket.io");
  const io = socketio(server, {
    path: "/play",
    cors: {
      origin: ["http://localhost:3000"]
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
});
