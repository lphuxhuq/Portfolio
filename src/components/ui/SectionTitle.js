import React from "react";

/**
 * SectionTitle — Reusable section heading component.
 * Usage: <SectionTitle title="Professional" highlight="Skillset" subtitle="..." />
 */
function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="section-title-wrapper">
      <h2 className="project-heading">
        {title}{" "}
        {highlight && <strong className="purple">{highlight} </strong>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
