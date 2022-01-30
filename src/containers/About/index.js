import "./styles.css";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "antd";

const About = () => {
  return (
    <div>
      <div
        className={`h-100 d-flex justify-content-center align-items-center min-vh-100`}
      >
        <h1>
          <FormattedMessage id='About Me' />
        </h1>
      </div>
    </div>
  );
};

export default About;
