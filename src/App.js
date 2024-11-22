import React, { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import Repositories from "./Repositories";
import Followers from "./Followers";

function App() {
  const [username, setUsername] = useState("Dill1027"); // Default username
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState("");

  const fetchGitHubData = async () => {
    try {
      setError("");
      // Use the dynamic username variable
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      const followersResponse = await axios.get(`https://api.github.com/users/${username}/followers`);
    
      setUserData(userResponse.data);
      setRepos(reposResponse.data);
      setFollowers(followersResponse.data);
    } catch (err) {
      setError("User not found! Please check the username.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#333", fontFamily: "Arial" }}>GitHub Profile Viewer</h1>
      
      {/* Input field to change GitHub username */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button 
        onClick={fetchGitHubData} 
        style={{ padding: "10px", fontSize: "16px", marginLeft: "10px" }}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <>
          <Profile data={userData} />
          <Repositories repos={repos} />
          <Followers followers={followers} />
        </>
      )}
    </div>
  );
}

export default App;
