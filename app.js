import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from App");
});

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
