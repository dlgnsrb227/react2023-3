import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import IntroPage from "./components/pages/IntroPage";
// import ProfilePage from "./components/pages/ProfilePage";
import PortPage from "./components/pages/PortPage";
import YoutubePage from "./components/pages/YoutubePage";
import MoviePage from "./components/pages/MoviePage";
import UnsplashPage from "./components/pages/UnsplashPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header attr={"header__wrap bg-blue nanumneo"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/port" element={<PortPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
      </Routes>
      <Footer attr={"footer__wrap section nanumneo"} />
    </BrowserRouter>
  );
};

export default App;
