import React from "react";
import "./TeammateCard.css";

export interface TeammateCardProps {
  name: string;
  title: string;
  avatar: string;
  bio: string;
}

const TeammateCard: React.FC<TeammateCardProps> = ({ name, title, avatar, bio }) => (
  <div className="teammate-card">
    <img src={avatar} alt={name} className="teammate-avatar" />
    <div className="teammate-name">{name}</div>
    <div className="teammate-title">{title}</div>
    <div className="teammate-bio">{bio}</div>
  </div>
);

export default TeammateCard;
