import React from "react";
import "./home.css";
import video from "../../video/vide.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="video_container">
        <video className="alba" src={video} loop autoPlay controls muted />
      </div>

      <div className="bottom_home">
        <img src="https://i.imgur.com/MqGat3q.png" alt="" className="logz" />

        <p className="weddo_address">Friday | NOV 8 2025 </p>
      </div>
    </div>
  );
};

export default Home;
