import React, { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import Repositories from "./Repositories";
import Followers from "./Followers";

function App() {
  const [username, setUsername] = useState("Dill1027");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState("");

  const fetchGitHubData = async () => {
    try {
      setError("");
      // Use the dynamic username variable
      const userResponse = await axios.get(`https://api.github.com/users/${Dill1027}`);
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
      <h1 style={{ color: "#333", fontFamily: "Arial" }}>Prabhath Dilshan's GitHub Profile</h1>
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
