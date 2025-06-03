import React from "react";
import TeammateCard from "../../components/TeammateCard/TeammateCard";
import "./TeamPage.css";
import { designers } from "../../data/designers";

const TeamPage = () => (
  <div className="team-bg">
    <main className="team-main">
      {/* Page Header */}
      <header className="gallery-header">
        <h2>Our Team</h2>
        <div className="divider"></div>
        <p>
          Our talented designers bring creativity, skill, and a personal touch to every appointment. From timeless classics to bold new trends, they're here to make your nail dreams a reality—all in a welcoming, relaxing environment.
        </p>
      </header>

      <section className="team-grid">
        {designers.map((designer) => (
          <TeammateCard
            key={designer.name}
            name={designer.name}
            title={designer.title}
            avatar={designer.avatar}
            bio={designer.bio}
          />
        ))}
      </section>
    </main>
  </div>
);

export default TeamPage;
