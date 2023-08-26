import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card-main-container">
      <div className="card-inner-container">
        <img src="images/qr-code.png" />
        <p className="text-1">
          Improve your front-end skills by building projects
        </p>
        <p className="text-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
