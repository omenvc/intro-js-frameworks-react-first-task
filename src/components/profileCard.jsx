import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, image, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-accent"></div>
      <div className="profile-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="profile-card-avatar">
        <img src={image} alt={name} />
      </div>
      <div className="profile-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="profile-card-buttons">
          <button className="follow-btn">Follow</button>
          <button className="message-btn">Message</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
