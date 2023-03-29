const express = require("express");
const app = express();
const connection = require("./db/db");
const cors = require("cors");

const router = require("./router/route");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(router);
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello homepage");
});

app.listen(PORT, async () => {
  try {
    console.log("server is connected" + " " + PORT);
    await connection();
  } catch (err) {
    console.log("error in server connection");
  }
});
