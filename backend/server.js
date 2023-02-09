const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();
const connectDB = require("./config/database");
const cors = require("cors");
const postRoutes = require("./routes/posts");

// middleware
app.use(express.json());
app.use(cors({ origin: process.env.REMOTE_CLIENT_APP, credentials: true }));

// quick custom log middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/posts", postRoutes);

connectDB();
app.listen(process.env.PORT || 4141, () => [
  console.log(`listening on port: ${process.env.PORT || 4141}`),
]);
