import React from "react";

function Repositories({ repos }) {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Repositories</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {repos.map((repo) => (
          <li key={repo.id} style={{ marginBottom: "10px" }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repositories;
