import React from "react";

function Profile({ data }) {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <img
        src={data.avatar_url}
        alt={`${data.name}'s avatar`}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
      <p>
        <strong>Public Repos:</strong> {data.public_repos}
      </p>
      <p>
        <strong>Followers:</strong> {data.followers}
      </p>
      <p>
        <strong>Following:</strong> {data.following}
      </p>
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default Profile;
