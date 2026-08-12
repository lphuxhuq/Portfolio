// src/data/projects.js
// ============================================================
// Project data layer. Each project maps to a card + case study page.
// To add a project: add an entry to PROJECTS array.
// To remove: remove the entry.
// No component changes needed.
//
// Optional fields: set to null if not available — sections won't render.
// ============================================================

export const PROJECT_CATEGORIES = [
  "All",
  "Information System",
  "Business Analysis",
  "Data Analytics",
  "AI / Automation",
  "Software Development",
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "[PROJECT_TITLE_1]",
    category: "Information System",
    shortDescription:
      "[Replace with 1-2 sentences describing what this project does and the problem it solves.]",

    // Case study fields — set to null if not available
    businessProblem:
      "[Describe the business problem this project addresses. What pain point or inefficiency did you identify?]",
    requirements: null,        // "[List key functional and non-functional requirements]"
    analysis: null,            // "[Describe your analysis process — stakeholder interviews, process mapping, etc.]"
    solution:
      "[Describe your solution approach. What did you build and why?]",
    systemDesign: null,        // "[ERD, system architecture, data flow diagrams, etc.]"
    implementation:
      "[Describe the implementation — languages, frameworks, architecture decisions.]",
    businessImpact: null,      // null if you have no real metrics — DO NOT fabricate numbers
    lessonsLearned: null,      // "[What would you do differently? What did you learn?]"

    myRole: "[Your specific role and contributions]",
    technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    businessAreas: ["[Business Area 1]", "[Business Area 2]"],
    keyFeatures: [
      "[Key feature or deliverable 1]",
      "[Key feature or deliverable 2]",
      "[Key feature or deliverable 3]",
    ],
    github: null,       // "https://github.com/lphuxhuq/project-repo" or null
    demo: null,         // "https://your-demo-url.com" or null
    screenshots: [],    // Array of image paths, empty if none
  },
  {
    id: "project-2",
    title: "[PROJECT_TITLE_2]",
    category: "Data Analytics",
    shortDescription: "[Replace with your project description.]",
    businessProblem: "[Business problem description]",
    requirements: null,
    analysis: null,
    solution: "[Solution description]",
    systemDesign: null,
    implementation: "[Implementation details]",
    businessImpact: null,
    lessonsLearned: null,
    myRole: "[Your role]",
    technologies: ["SQL", "Power BI", "Excel"],
    businessAreas: ["Business Intelligence", "Reporting"],
    keyFeatures: ["[Feature 1]", "[Feature 2]"],
    github: null,
    demo: null,
    screenshots: [],
  },
  {
    id: "project-3",
    title: "[PROJECT_TITLE_3]",
    category: "Business Analysis",
    shortDescription: "[Replace with your project description.]",
    businessProblem: "[Business problem]",
    requirements: null,
    analysis: null,
    solution: "[Solution]",
    systemDesign: null,
    implementation: "[Implementation]",
    businessImpact: null,
    lessonsLearned: null,
    myRole: "[Your role]",
    technologies: ["[Technology]"],
    businessAreas: ["Business Analysis"],
    keyFeatures: ["[Feature 1]"],
    github: null,
    demo: null,
    screenshots: [],
  },
];
