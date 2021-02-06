const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //we can see de request GET /api 200 3.316 ms
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

//app
const app = express(); // express create and execute the server

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

//middlewares - we have to use meddleware, using ".use"
app.use(morgan("dev"));
/* The server will comunicate by JSON DATA, it will pass JSON DATA to a javascript object so that can proccess that data.
we can setup the limit of data that the client is sending to the server, it will be an error.*/
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

//route
const port = process.env.port || 8000; //if process.env.port doesn't work we gave a defaul value that is 8000.

app.listen(port, () => console.log(`Server is running on port ${port}`));
