import "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  return (
    <button
      key={props.key}
      htmlType={props.htmlType}
      className='btn-primary-custom'
      onClick={() => props.onClick()}
      styles={{ ...props.styles }}
    >
      <FontAwesomeIcon
        icon={props.icon}
        opacity={props.iconOpacity}
        style={{
          ...props.iconStyles,
          fontSize: "20px",
          marginRight: "8px",
        }}
      />
      {"      "}
      <span className='btn-text'>{props.buttonText}</span>
    </button>
  );
};

export default Button;
