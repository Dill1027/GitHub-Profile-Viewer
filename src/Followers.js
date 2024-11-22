import React from "react";

function Followers({ followers }) {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Followers</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {followers.map((follower) => (
          <li key={follower.id} style={{ marginBottom: "10px" }}>
            <img
              src={follower.avatar_url}
              alt={`${follower.login}'s avatar`}
              style={{ width: "50px", borderRadius: "50%", marginRight: "10px" }}
            />
            <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
              {follower.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Followers;
