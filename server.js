const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const corsOptions = {
  origin: "http://localhost:3000", // Update this to your actual React frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Store text content associated with links in memory (for demonstration purposes)
const textContents = {};

io.on("connection", (socket) => {
  socket.on("join-room", (room) => {
    socket.join(room); // Join the specified room

    // If text content exists for the room, send it to the connected client
    if (textContents[room]) {
      socket.emit("text-updated", textContents[room]);
    }
  });

  socket.on("update-text", ({ roomId, text }) => {
    // Store the updated text content
    textContents[roomId] = text;

    // Broadcast the updated text to all users in the room
    io.to(roomId).emit("text-updated", text);
  });
});

// Example API endpoint to fetch text content based on a link
app.get("/api/text", (req, res) => {
  const { link } = req.query;

  // Retrieve text content based on the link from memory (for demonstration purposes)
  const text = textContents[link] || "";

  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Set the appropriate origin here
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  res.json({ text });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
