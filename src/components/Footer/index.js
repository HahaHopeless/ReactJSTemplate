import React from "react";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center'>
      <p>
        <FormattedMessage id='builtBy' />
      </p>
    </footer>
  );
};

export default Footer;
