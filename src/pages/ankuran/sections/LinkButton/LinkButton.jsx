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
        <span class="button-background"></span>
        <span class="button-text">{title}</span>
      </span>
    </div>
  );
};

export default LinkButton;
