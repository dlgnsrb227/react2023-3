import React from "react";

const Intro = (props) => {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">프론트엔드 커리큘럼 과정 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>Frontend</span>
          <h3>
            프론트앤드
            <br />
            전문과정
          </h3>
          <p>
            프론트앤드 개발자로 취업하기 위한
            <br />
            전문과정입니다.
            <br />
            여러분들도 도전해보세요!
          </p>
        </div>
        <div className="intro__desc">
          <div>
            <h4 className="icon-react">React.js</h4>
            <p>
              React는 사용자 인터페이스(UI)를 구축하기 위한 JavaScript
              라이브러리입니다. React는 웹 애플리케이션 개발에 주로 사용되며,
              모바일 앱과도 통합할 수 있습니다.
            </p>
          </div>
          <div>
            <h4 className="icon-vue">Vue.js</h4>
            <p>
              Vue는 사용자 인터페이스(UI)를 구축하기 위한 프로그레시브
              자바스크립트 프레임워크입니다. React와 마찬가지로 웹 애플리케이션
              개발에 주로 사용됩니다.
            </p>
          </div>
          <div>
            <h4 className="icon-vite">Vite.js</h4>
            <p>
              Vite.js는 개발 서버와 빌드 도구를 포함하고 있어 개발 환경에서 매우
              빠른 번들링 및 핫 리로딩 기능을 제공합니다. 이는 애플리케이션을
              빠르게 개발하고 효율적으로 변경사항을 적용할 수 있게 해줍니다.
            </p>
          </div>
          <div>
            <h4 className="icon-next">Next.js</h4>
            <p>
              Next.js는 React 기반의 서버 사이드 렌더링 프레임워크입니다. 웹
              애플리케이션을 개발할 때 필요한 기본 구성 요소와 라우팅, 데이터
              통합 등을 제공하여 개발자들이 보다 쉽고 빠르게 웹 애플리케이션을
              구축할 수 있게 도와줍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
