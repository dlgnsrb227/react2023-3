import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer id="footer" className={props.attr} role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__text">
          <h5>Hooooong</h5>
          <p>
            더 궁금하신 것이나
            <br />
            문의하실 사항이 있다면 연락주세요.
          </p>
          <Link to="mailto:gnsrbdi@naver.com">gnsrbdi@naver.com</Link>
          <ul className="sns">
            <li>
              <Link to="/"> </Link>
            </li>
            <li>
              <Link to="/"> </Link>
            </li>
            <li>
              <Link to="/"> </Link>
            </li>
            <li>
              <Link to="/"> </Link>
            </li>
            <li>
              <Link to="/"> </Link>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <div>
            <h4>사이트</h4>
            <ul>
              <li>
                <Link to="/">웹표준 사이트</Link>
              </li>
              <li>
                <Link to="/">반응형 사이트</Link>
              </li>
              <li>
                <Link to="/">패럴랙스 사이트</Link>
              </li>
              <li>
                <Link to="/">포트폴리오 사이트</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>유형</h4>
            <ul>
              <li>
                <Link to="/">이미지 유형</Link>
              </li>
              <li>
                <Link to="/">카드 유형</Link>
              </li>
              <li>
                <Link to="/">이미지/텍스트 유형</Link>
              </li>
              <li>
                <Link to="/">배너 유형</Link>
              </li>
              <li>
                <Link to="/">텍스트 유형</Link>
              </li>
              <li>
                <Link to="/">푸터 유형</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>스크립트</h4>
            <ul>
              <li>
                <Link to="/">검색 이펙트</Link>
              </li>
              <li>
                <Link to="/">퀴즈 이펙트</Link>
              </li>
              <li>
                <Link to="/">마우스 이펙트</Link>
              </li>
              <li>
                <Link to="/">슬라이드 이펙트</Link>
              </li>
              <li>
                <Link to="/">패럴랙스 이펙트</Link>
              </li>
              <li>
                <Link to="/">게임 이펙트</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>레퍼런스</h4>
            <ul>
              <li>
                <Link to="/">CSS</Link>
              </li>
              <li>
                <Link to="/">FONTS</Link>
              </li>
              <li>
                <Link to="/">BLOG</Link>
              </li>
              <li>
                <Link to="/">REFERENCE</Link>
              </li>
              <li>
                <Link to="/">TUTORIAL</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__right">
        <span>Copyright 2022. All Rights Reserved. - Designed by Hoong</span>
      </div>
    </footer>
  );
};

export default Footer;
