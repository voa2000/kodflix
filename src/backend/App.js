const express = require('express')
const app = express()
const port = 3001
const movieList = require("./movieList.js");

app.get('/rest/shows', (req, res) => {
    res.send(movieList);
})

app.listen(port, () => console.log(`Movie details app listening on port no ${port}!`))