import "./styles.css";
import React from "react";

const Cookies = (props) => {
  return (
    <div className='cookie-dialog'>
      <h4>Our use of cookies</h4>
      <span>
        This website stores basic information in your browser, potentially
        improving your browsing experience and helping us deliver more relevant
        information to you.
      </span>
      <br></br>
      <span>Would you like to acccept our cookies policy?</span>
    </div>
  );
};

export default Cookies;
