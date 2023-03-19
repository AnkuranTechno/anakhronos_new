import React from "react";
import "./LinkButton.scss";
import { useNavigate } from "react-router-dom";
const LinkButton = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <span
        onClick={() => {
          navigate("/");
        }}
        class="button"
      >
        <span class="button-background"></span>
        <span class="button-text">Ankuran</span>
      </span>
    </div>
  );
};

export default LinkButton;
