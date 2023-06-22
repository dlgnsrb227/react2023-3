import React from "react";

const movieTag = [
  { number: "28", name: "액션" },
  { number: "35", name: "코미디" },
  { number: "14", name: "판타지" },
  { number: "10749", name: "로맨스" },
  { number: "53", name: "스릴러" },
  { number: "27", name: "공포" },
];

const MovieTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.value);
  }
  return (
    <div className="youtube__tag">
      <div>
        {movieTag.map((tag, index) => (
          <button onClick={btnClick} key={index} value={tag.number}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieTag;
