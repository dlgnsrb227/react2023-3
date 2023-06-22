import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (prop) => {
  return (
    <section id="movieSection" className={prop.attr}>
      <div className="movie__inner container">
        <div className="movie__text">
          <h3>추천 movie</h3>
          <p>추천 영화를 구경하고 감상해보세요 !</p>
          <Link to="#" className="button-green">
            자세히보기
          </Link>
        </div>
        <div className="movie__item">
          <div>
            <img src="./assets/img/movie/movie01.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie02.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie03.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie04.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie05.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie06.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie07.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie08.png" alt="영화썸네일이미지" />
          </div>
          <div>
            <img src="./assets/img/movie/movie09.png" alt="영화썸네일이미지" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
