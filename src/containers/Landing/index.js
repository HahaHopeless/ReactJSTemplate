import "./styles.css";
import React from "react";
import { FormattedMessage } from "react-intl";
import ReactAnime from "react-animejs";
import ScrollUp from "../../components/ScrollUp";
import Intro1 from "../../components/Intro1";

const Landing = () => {
  const { Anime, stagger } = ReactAnime;

  const fadeInOut = () => {
    setTimeout(() => {
      return "fade-out";
    }, 200);
  };

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <ScrollUp
          className={`fade-in ${fadeInOut}`}
          animeClass={`fade-in ${fadeInOut}`}
        />
        <Intro1 />
        <div className='vh-100'></div>
        <div className='vh-100'></div>
      </div>
    </>
  );
};

export default Landing;
