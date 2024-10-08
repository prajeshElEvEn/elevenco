import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "pr4j3sh",
  EMAIL: "prajesh.eleven118@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "This is Prajesh Pratap Singh's minimal and lightweight place for blogs and projects.",
};

export const QUOTE: Metadata = {
  TITLE: "Qoute",
  DESCRIPTION: "Describe what you want me to create for you.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/pr4j3sh",
  },
  {
    NAME: "x",
    HREF: "https://x.com/pr4j3sh",
  },
];
