const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Node.js server!");
  }
  else if (req.method === "GET" && req.url === "/menu") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ items: ["thali", "biryani"] }));
  } else if (req.method === "POST" && req.url === "/order") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      const order = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          status: "received",
          order,
        }),
      );
    });
  }
  else{
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
