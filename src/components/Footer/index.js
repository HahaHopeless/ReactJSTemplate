import "./styles.css";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center footer-container'>
      <p>
        <FormattedMessage
          id='builtBy'
          values={{
            b: (...chunks) => (
              <b style={{ fontWeight: 700, fontSize: "18px" }}>{chunks}</b>
            ),
          }}
        />
      </p>
    </footer>
  );
};

export default Footer;
