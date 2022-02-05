import "./styles.css";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Lottie from "react-lottie";
import abstract from "../../assets/animations/abstract.json";
import { Button } from "antd";

const abstractAnimation = {
  loop: true,
  autoplay: true,
  animationData: abstract,
};

const Features = () => {
  return (
    <div>
      <div
        className={`h-100 d-flex justify-content-center align-items-center min-vh-100`}
      >
        <h1 className='features-page-title'>
          <FormattedMessage id='Features' />
        </h1>
        {/* 
        <Lottie
          options={abstractAnimation}
          height={600}
          width={600}
          isStopped={false}
          style={{
            cursor: "default",
            pointerEvents: "none",
          }}
        />
         */}
      </div>
    </div>
  );
};

export default Features;
