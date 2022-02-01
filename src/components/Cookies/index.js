import "./styles.css";
import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import {
  setCookiesDialogVisibility,
  setGlobalCookies,
} from "../../redux/actions/settings";
import translation_en from "../../translations/en.json";
import translation_de from "../../translations/de.json";

const messages = {
  en: translation_en,
  de: translation_de,
};

const Cookies = (props) => {
  console.log(navigator.language.substring(0, 2));
  return (
    <div className='cookie-dialog'>
      <h4>Our use of cookies</h4>
      <span>{messages[navigator.language.substring(0, 2)]["cookiesText"]}</span>
      <br></br>
      <span>
        {messages[navigator.language.substring(0, 2)]["cookiesQuestion"]}
      </span>
      <div className='d-flex flex-row align-items-center justify-content-around pt-4'>
        <Button
          type='primary'
          onClick={() => {
            props.setGlobalCookies();
          }}
        >
          {messages[navigator.language.substring(0, 2)]["accept"]}
        </Button>
        <Button
          onClick={() => {
            props.setCookiesDialogVisibility();
          }}
        >
          {messages[navigator.language.substring(0, 2)]["reject"]}
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.settings.lang,
    areCookiesAccepted: state.settings.areCookiesAccepted,
    isCookiesDialogVisible: state.settings.isCookiesDialogVisible,
  };
};

export default connect(mapStateToProps, {
  setCookiesDialogVisibility,
  setGlobalCookies,
})(Cookies);
