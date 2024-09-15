const express = require("express");
const http = require('http')
const { Server } = require("socket.io");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error Occurred : ${err}`);
  });

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (roomNumber) => {
    socket.join(roomNumber);
    console.log(`User ${socket.id} joined room ${roomNumber}`);
  });

  socket.on("leave_room", (roomNumber) => {
    socket.leave(roomNumber);
    console.log(`User ${socket.id} left room ${roomNumber}`);
  });

  socket.on("send_message", (data) => {
    console.log(
      `Message from ${socket.id} in room ${data.room}: ${data.message}`
    );
    socket.to(data.room).emit("received_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});


app.get("/", (req, res) => {
  res.send(`Hello from server 😊`);
});

// Auth Router
const authRouter = require('./routes/Auth')
app.use('/auth',authRouter)