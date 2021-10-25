import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { setGlobalLanguage } from "../../store/actionTypes";

const Navbar = (props) => {
  const [collapsedState, setCollapsedState] = useState(false);
  const navClass = collapsedState
    ? "collapse navbar-collapse show"
    : "collapse navbar-collapse";
  const togglerClass = collapsedState
    ? "navbar-toggler collapsed"
    : "navbar-toggler";
  const toggleNav = () => {
    setCollapsedState(!collapsedState);
  };

  const setLang = (e) => {
    props.setGlobalLanguage(e);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        <FormattedMessage id='myApp' />
      </Link>
      <button
        className={togglerClass}
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={toggleNav}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className={navClass} id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>
              <FormattedMessage id='home' />{" "}
              <span className='sr-only'>(current)</span>
            </Link>
          </li>
        </ul>
        <div>
          <Link to='/login'>
            <button className='btn btn-secondary mr-3'>
              <FormattedMessage id='login' />
            </button>
          </Link>
          <Link to='/register'>
            <button className='btn btn-primary'>
              <FormattedMessage id='register' />
            </button>
          </Link>
        </div>
      </div>
      <div className='dropdown show d-flex justify-content-center align-items-center'>
        <a
          className='btn btn-secondary dropdown-toggle'
          href='#'
          role='button'
          id='dropdownMenuLink'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <FormattedMessage id='language' />
        </a>

        <div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
          <a class='dropdown-item' key='en' onClick={(e) => setLang("en")}>
            <img
              src={require("../../assets/icons/en.svg")}
              style={{ width: "20px", marginRight: "5px" }}
            />
            <FormattedMessage id='english' />
          </a>
          <a class='dropdown-item' key='de' onClick={(e) => setLang("de")}>
            <img
              src={require("../../assets/icons/de.svg")}
              style={{ width: "20px", marginRight: "5px" }}
            />
            <FormattedMessage id='german' />
          </a>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, { setGlobalLanguage })(Navbar);
