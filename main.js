const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("Body Payload: ", req.body);
  res.send("Hello World from Post!:" + req.body);
});

app.put("/", (req, res) => {
  res.send("Hello World from Put!");
});

app.patch("/", (req, res) => {
  res.send("Hello World from Patch!");
});

app.delete("/", (req, res) => {
  res.send("Hello World from Delete!");
});

app.get("/a", (req, res) => {
  res.send("Hello World A!");
});

app.get("/b", (req, res) => {
  res.send("Hello World B!");
});

app.get("/search", (req, res) => {
  const { name } = req.query;
  console.log("Query: ", req.query);
  res.send("Search!" + name);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("Hello World B!: " + req.params.id);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
