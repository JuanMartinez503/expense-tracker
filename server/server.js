const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`Now Listening on localhost${PORT}`));
});
