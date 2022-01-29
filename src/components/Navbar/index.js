import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { setGlobalLanguage } from "../../actions/lang";
import { useLocation } from "react-router-dom";
import ReactAnime from "react-animejs";

const Navbar = (props) => {
  const { Anime, stagger } = ReactAnime;

  const setLang = (e) => {
    props.setGlobalLanguage(e);
  };

  var location = useLocation();

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      console.log("DOM fully loaded");
    },
    false
  );

  return (
    <nav className='app-navbar pl-5 pr-5 pt-2 pb-2 ml-auto mr-auto'>
      <ul className='d-flex justify-content-around align-items-center'>
        <li>
          <Link
            to='/'
            className={
              location.pathname === "/" ? "app-link active" : "app-link"
            }
          >
            <FormattedMessage id='home' />{" "}
            <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className={
              location.pathname === "/about" ? "app-link active" : "app-link"
            }
          >
            <FormattedMessage id='About' />{" "}
            <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className={
              location.pathname === "/contact" ? "app-link active" : "app-link"
            }
          >
            <FormattedMessage id='contact' />{" "}
            <span className='sr-only'>(current)</span>
          </Link>
        </li>
        <li>
          <div class='btn-group'>
            <button
              type='button'
              class='btn btn-secondary btn-sm dropdown-toggle'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <img
                src={require("../../assets/icons/lang.svg")}
                className='lang-icon mr-2'
              />
              <span>{props.lang.toUpperCase()}</span>
            </button>
            <div class='dropdown-menu'>
              <a
                class='dropdown-item'
                onClick={() => {
                  setLang("en");
                }}
              >
                <img
                  src={require("../../assets/icons/en.svg")}
                  className='lang-icon'
                />
                <span>EN</span>
              </a>
              <a
                class='dropdown-item'
                onClick={() => {
                  setLang("de");
                }}
              >
                <img
                  src={require("../../assets/icons/de.svg")}
                  className='lang-icon'
                />
                <span>DE</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang.lang,
  };
};

export default connect(mapStateToProps, { setGlobalLanguage })(Navbar);
