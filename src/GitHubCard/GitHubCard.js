import React, { useEffect, useState } from "react";


function GitHubCard() {
  const [gitHubName, setGitHubName] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubAvatar, setGitHubAvatar] = useState("");
  const [gitHubBlog, setGitHubBlog] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/AriesRedWar")
      .then((res) => res.json())
      .then((data) => {
        setGitHubName(data.name);
        setGitHubURL(data.html_url);
        setGitHubAvatar(data.avatar_url);
        setGitHubBlog(data.bio);
      });
  }, []);

  return (
    <div>
      <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubName}</h2>
        <a href={gitHubURL} target="_blank">
          <button>Link to Github profile</button>
        </a>
        <hr class="solid"></hr>
        <img
          src={gitHubAvatar}
          alt="Github profile"
          width="200"
          height="200"
        />
      </div>
      <div>
        <h3>{gitHubBlog}</h3>
      </div>

    </div>
  );
}

export default GitHubCard;
