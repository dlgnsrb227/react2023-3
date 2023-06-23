import React from "react";

const PortCont = () => {
  return (
    <>
      <div className="portfolio__inner container">
        <div className="leftside">
          <div className="left__work work1">
            <img
              src="../../assets/img/port/mouseEffect01.png"
              alt="mouseEffect"
            />
            <h3>
              Mouse <em>Effect</em>
            </h3>
            <p className="chosun">
              마우스의 움직임에 따라 변하는 효과들을 만들었습니다.
            </p>
          </div>
          <div className="left__work work2">
            <img
              src="../../assets/img/port/gameEffect01.png"
              alt="gameEffect"
            />
            <h3>
              Game <em>Effect</em>
            </h3>
            <p className="chosun">
              뮤직플레이어와 테트리스를 구현한 게임 효과입니다.
            </p>
          </div>
          <div className="left__work work3">
            <img
              src="../../assets/img/port/webstandard01.png"
              alt="webstandard"
            />
            <h3>
              Web standard <em>Site</em>
            </h3>
            <p className="chosun">웹표준을 준수하여 코딩한 웹사이트 입니다.</p>
          </div>
        </div>
        <div className="rightside">
          <div className="right__work work4">
            <img
              src="../../assets/img/port/parallaxEffect01.png"
              alt="parallaxEffect"
            />
            <h3>
              Parallax <em>Effect</em>
            </h3>
            <p className="chosun">
              스크롤함에 따라 변하는 효과들을 만들었습니다.
            </p>
          </div>
          <div className="right__work work5">
            <img
              src="../../assets/img/port/quizEffect01.png"
              alt="quizEffect"
            />
            <h3>
              Quiz <em>Effect</em>
            </h3>
            <p className="chosun">
              여러가지 문제를 풀 수 있는 화면을 구현했습니다.
            </p>
          </div>
          <div className="right__work work6">
            <img
              src="../../assets/img/port/webstandard02.png"
              alt="webstandard"
            />
            <h3>
              Web standard <em>Site</em>
            </h3>
            <p className="chosun">웹표준을 준수하여 코딩한 웹사이트 입니다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortCont;
