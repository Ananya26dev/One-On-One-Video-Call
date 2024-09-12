import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [value, setValue] = useState("");
  const navigateTo = useNavigate();
  const handleJoin = useCallback(() => {
    navigateTo(`/room/${value}`);
  });
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Join A Room</h1>
        <input
          type="text"
          value={value}
          placeholder="Enter Your Room ID"
          onChange={(e) => setValue(e.target.value)}
          className="room-input"
        />
        <button className="join-btn" onClick={handleJoin}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Home;
