// index.js
const http = require("http");

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "success" }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
