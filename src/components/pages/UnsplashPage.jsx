import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";

import UnsplashSlider from "../unsplash/UnsplashSlider";
import UnsplashSearch from "../unsplash/UnsplashSearch";
import UnsplashTag from "../unsplash/UnsplashTag";
import UnsplashCont from "../unsplash/UnsplashCont";

const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=J2LaT4yhkYj1aMevZIbcACiyXSt2ATNj11PIfnxis9M&per_page=30&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/photos?client_id=J2LaT4yhkYj1aMevZIbcACiyXSt2ATNj11PIfnxis9M&per_page=30",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Contents>
        <ContTitle title="Unsplash" />
        <UnsplashSlider images={images} />
        <UnsplashSearch onSearch={search} />
        <UnsplashTag onSearch={search} />
        <UnsplashCont images={images} />
      </Contents>
    </>
  );
};

export default UnsplashPage;
