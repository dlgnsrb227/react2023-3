import React from 'react';
import { Link } from 'react-router-dom';

const Unsplash = (prop) => {
  return (
    <section id="unsplashSection" className={prop.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>추천 unsplash 이미지</h3>
          <p>
            unsplash에서 다양한 이미지를 다운로드 받으세요.
            <br />
            추천 이미지를 구경하고 가세요.
          </p>
          <Link to="#" className="button-blue">
            자세히보기
          </Link>
        </div>
        <div className="unsplash__item">
          <div>
            <img
              src="./assets/img/unsplash/unsplash01.png"
              alt="언스플래쉬이미지"
            />
          </div>
          <div>
            <img
              src="./assets/img/unsplash/unsplash02.png"
              alt="언스플래쉬이미지"
            />
          </div>
          <div>
            <img
              src="./assets/img/unsplash/unsplash03.png"
              alt="언스플래쉬이미지"
            />
          </div>
          <div>
            <img
              src="./assets/img/unsplash/unsplash04.png"
              alt="언스플래쉬이미지"
            />
          </div>
          <div>
            <img
              src="./assets/img/unsplash/unsplash05.png"
              alt="언스플래쉬이미지"
            />
          </div>
          <div>
            <img
              src="./assets/img/unsplash/unsplash06.png"
              alt="언스플래쉬이미지"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
