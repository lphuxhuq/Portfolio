import React from "react";

/**
 * SkillBadge — Renders a single skill as a styled badge.
 * Used inside SkillsSection grouped lists.
 */
function SkillBadge({ skill }) {
  return (
    <span className="skill-badge" role="listitem">
      {skill}
    </span>
  );
}

export default SkillBadge;
