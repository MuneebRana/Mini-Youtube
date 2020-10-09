import axios from "axios";

const KEY = "AIzaSyBSFZ_y-e_w88_DZC69RnW-r2aiPivnCx0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
