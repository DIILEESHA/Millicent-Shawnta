import React from "react";
import "./home.css";
import video from "../../video/vid.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="video_container">
        <video className="alba" src={video} autoPlay controls muted />
      </div>

      <div className="bottom_home">
        <img src="https://i.imgur.com/sx51EpG.png" alt="" className="logz" />
      </div>
    </div>
  );
};

export default Home;
