import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5007;
const API_KEY = process.env.YOUTUBE_API_KEY;

// Video Details
app.get("/videos/:videoId", async (req, res) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${req.params.videoId}&key=${API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Channel Details
app.get("/channels/:channelId", async (req, res) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${req.params.channelId}&key=${API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Comments
app.get("/comments/:videoId", async (req, res) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=40&videoId=${req.params.videoId}&key=${API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Popular Videos
app.get("/popular/:categoryId", async (req, res) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${req.params.categoryId}&key=${API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});