import React from "react";

const youtubeTag = [
  { name: "music" },
  { name: "react.js" },
  { name: "vue.js" },
  { name: "next.js" },
  { name: "node.js" },
  { name: "vite.js" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
