import React from "react";
import "./author.css";

const Author = () => {
  return (
    <p className="author">
      ... Powered by{" "}
      <span className="author-name">
        <a href="https://github.com/MahdiReact/coffe-time.git">CoderOne</a>
      </span>
    </p>
  );
};

export default Author;
