import React, { useState } from "react";

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async () => {
    if (!url.startsWith("http")) {
      alert("Please enter a valid URL starting with http or https");
      return;
    }

    // Simulating shortening logic
    const randomString = Math.random().toString(36).substring(7);
    const shortened = `https://short.ly/${randomString}`;
    setShortUrl(shortened);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter your long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px", padding: "8px" }}>
        Shorten
      </button>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <strong>Shortened URL:</strong> <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default UrlShortener;
