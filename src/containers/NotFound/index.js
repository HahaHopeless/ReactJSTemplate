import "./styles.css";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import animationData from "../../assets/animations/404.json";

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className='container-fluid h-100 min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <Lottie
        options={defaultOptions}
        height={300}
        width={450}
        isStopped={false}
        autoplay
        style={{ pointerEvents: "none", cursor: "default" }}
      />
      <h1>
        <FormattedMessage id='pageNotFound' />
      </h1>
      <p>
        <FormattedMessage id='resourceMoved' />
      </p>
      <Link to='/'>
        <FormattedMessage id='gotoStart' />
      </Link>
    </div>
  );
}

export default NotFound;
