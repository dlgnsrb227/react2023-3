import React from "react";
import ContTitle from "../layout/ContTitle";
import Contents from "../layout/Contents";
// import IntroSlider from "../intro/IntroSlider";
import IntroProgram from "../intro/IntroProgram";

const IntroPage = () => {
  return (
    <Contents>
      <ContTitle title="front-end" />
      {/* <IntroSlider /> */}
      <IntroProgram />
    </Contents>
  );
};

export default IntroPage;
