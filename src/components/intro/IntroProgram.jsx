import React from "react";

const IntroProgram = () => {
  return (
    <>
      <div className="intro__program container">
        <h2 className="react">React.js</h2>
        <p>
          React.js는 페이스북에서 개발한 오픈 소스 JavaScript 라이브러리로,
          사용자 인터페이스(UI)를 구축하기 위해 사용됩니다.
          <br />
          React는 재사용 가능한 UI 컴포넌트를 작성하고 이를 조합하여 복잡한 UI를
          만들 수 있도록 돕는다는 점에서 매우 강력하고 인기 있는 도구입니다.
        </p>
        <p>
          React는 가상 DOM(Virtual DOM) 기술을 기반으로 작동합니다.
          <br /> 이는 React가 UI 변경 사항을 실제 DOM에 직접 적용하는 대신 가상
          DOM에 변경 사항을 적용한 다음 최소한의 DOM 조작으로 업데이트를
          수행하는 것을 의미합니다.
          <br /> 이 방식은 성능을 향상시키고 웹 애플리케이션의 반응성을 개선하는
          데 도움이 됩니다.
        </p>
        <div className="intro__program__desc">
          <span>React.js 주요특징</span>
          <ul>
            <li>
              컴포넌트 기반: React는 재사용 가능한 UI 컴포넌트를 작성하는 데
              초점을 맞추고 있습니다.
              <br /> 각 컴포넌트는 자체적으로 동작하며, 다른 컴포넌트와 조합하여
              복잡한 UI를 구성할 수 있습니다.
            </li>
            <li>
              가상 DOM: React는 가상 DOM을 사용하여 최소한의 DOM 조작으로
              업데이트를 수행합니다.
              <br /> 이는 변경 사항을 효율적으로 적용하고 성능을 향상시킵니다.
            </li>
            <li>
              단방향 데이터 흐름: React는 단방향 데이터 흐름을 채택하고
              있습니다.
              <br /> 데이터는 상위 컴포넌트에서 하위 컴포넌트로 흘러가며, 하위
              컴포넌트는 상위 컴포넌트의 데이터를 수정할 수 없습니다.
              <br /> 이는 애플리케이션의 상태 변화를 추적하기 쉽게 만들어줍니다.
            </li>
            <li>
              JSX: JSX는 JavaScript를 확장한 문법으로, JavaScript 코드 안에서
              XML과 유사한 구문을 사용하여 컴포넌트의 구조와 모양을 정의할 수
              있게 합니다.
              <br /> 이는 가독성을 높이고 컴포넌트의 렌더링 로직과 UI 구성
              요소를 한 곳에서 관리할 수 있게 도와줍니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="intro__program">
        <h2 className="vue">Vue.js</h2>
      </div>
      <div className="intro__program">
        <h2 className="vite">Vite.js</h2>
      </div>
      <div className="intro__program">
        <h2 className="next">Next.js</h2>
      </div>
    </>
  );
};

export default IntroProgram;
