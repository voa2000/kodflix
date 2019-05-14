const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const movieList = require("./movieList.js");
const path = require("path");

app.get("/rest/shows", (req, res) => {
  res.send(movieList);
});

//app.use(express.static(path.join(__dirname, '../../build')));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../build", "index.html"));
});

app.listen(port, () =>
  console.log(`Movie details app listening on port no ${port}!`)
);
