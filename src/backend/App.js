const express = require('express')
const app = express()
const port = 1000
const movieList = require("./movieList.js");

app.get('/rest/shows', (req, res) => {
    res.send(movieList);
})

app.listen(port, () => console.log(`Movie details app listening on port ${port}!`))