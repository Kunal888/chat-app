const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const router = require("./router");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = 4000;

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { user } = addUser({ id: socket.id, name, room });

    // if (error) return callback(error);

    socket.emit("message", {
      user: `system-generated`,
      text: `Welcome to room ${room}.`,
    });
    socket.broadcast.to(room).emit("message", {
      user: `system-generated`,
      text: `${name} has joined.`,
    });
    socket.join(room);

    // callback();
  });

  socket.on("send-message", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    console.log(`User left!`);
  });
});

app.use(router);
app.use(cors());

server.listen(PORT, () => console.log(`server running on port ${PORT}.`));
