const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Node.js server of Express!"));

app.get("/menu", (req, res) =>
  res.json({
    items: ["thali", "biryani"],
  }),
);

app.post("/order", myfun);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const myfun = (req, res) => {
  let order = req.body;

  res.status(200).json({
    status: "received",
    order: req.body,
  });
};

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
