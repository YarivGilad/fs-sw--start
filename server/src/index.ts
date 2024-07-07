import express from "express";
import morgan from "morgan";
import cors from "cors";
import log from "@ajar/marker";

const app = express();

app.use(morgan("dev"));
app.use(cors({origin: process.env.CLIENT_URL, optionsSuccessStatus: 200}));
app.use(express.json());


app.post("/subscribe", async (req, res) => {
  res.status(201).json({ status: "Subscribed Successfully!!" });
});

app.post("/unsubscribe", async (req, res) => {
  res.status(201).json({status: "UnSubscribed Successfully!!"});
});

app.post("/send-notification", async (req, res) => {
  res.status(200).json({ message: "Notification sent successfully." });
});

app.listen(process.env.PORT, () => {
  log.magenta(`🌎  listening on`,` ✨ ⚡ http://localhost:${process.env.PORT}`,`🚀`);
});