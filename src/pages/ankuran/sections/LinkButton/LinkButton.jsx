import React from "react";
import "./LinkButton.scss";
import { useNavigate } from "react-router-dom";
const LinkButton = ({ title, render }) => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <span
        onClick={() => {
          navigate(`/${render}`);
        }}
        class="button"
      >
        <span className="button-background"></span>
        <span className="button-text">{title}</span>
      </span>
    </div>
  );
};

export default LinkButton;
