import React from "react";
import { FormattedMessage } from "react-intl";

const Landing = () => {
  return (
    <>
      <div className='h-100 d-flex justify-content-center align-items-center min-vh-100'>
        <h1>
          <FormattedMessage id='welcome' />
        </h1>
      </div>
    </>
  );
};

export default Landing;
