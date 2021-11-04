import "./styles.css";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <>
      <div
        className={`h-100 d-flex justify-content-center align-items-center min-vh-100 skills-container `}
      >
        <h1>
          <FormattedMessage id='About Me' />
        </h1>
      </div>
    </>
  );
};

export default About;
