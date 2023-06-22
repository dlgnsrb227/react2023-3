import React from "react";
import Contents from "../layout/Contents";

import Slider from "../section/Slider";
import Intro from "../section/Intro";
// import Profile from "../section/Profile";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movie from "../section/Movie";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap" />
        <Intro attr="intro__wrap bg-blue section" />
        {/* <Profile attr="profile__wrap section center" /> */}
        <Portfolio attr="port__wrap section center" />
        <Youtube attr="youtube__wrap  bg-blue section" />
        <Unsplash attr="unsplash__wrap section" />
        <Movie attr="movie__wrap section  bg-blue" />
      </Contents>
    </>
  );
};

export default Home;
