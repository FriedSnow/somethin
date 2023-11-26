const express = require('express');
const unitRouter = require('./routes/unit.routes.js');
const PORT = process.env.port || 8080;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(unitRouter);

app.use(express.static(__dirname));

app.get("/", function (request, response){
    response.sendFile(__dirname + "/index.html");
});

app.get("/unit/:id", function (request, response){
    response.sendFile(__dirname + './public/single.html');
});

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));