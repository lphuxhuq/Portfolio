import React from "react";

/**
 * CategoryBadge — Small label badge for project categories.
 * variant: "category" | "tech" | "default"
 */
function CategoryBadge({ label, variant = "category" }) {
  return (
    <span
      className={`mis-badge mis-badge--${variant}`}
      aria-label={`Category: ${label}`}
    >
      {label}
    </span>
  );
}

export default CategoryBadge;
