const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./routes")
const db = require("./models");
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);


app.get("/", (req, res) => {
    res.json({ message: "Welcome to bluenet application." });
});
const PORT = process.env.PORT || 9080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

