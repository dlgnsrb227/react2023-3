import React from "react";

const unsplashTag = [
  { name: "city" },
  { name: "building" },
  { name: "architecture" },
  { name: "art" },
  { name: "animal" },
  { name: "interior" },
];

const UnsplashTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag">
      <div>
        {unsplashTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnsplashTag;
