import axios from "axios";

const KEY = "AIzaSyDEPhhlzvC-IC4q1S8vj_lC_gWg5YlxkaY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
