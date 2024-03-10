// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prajesh Pratap Singh",
  tagline: "Web Developer | UI/UX Designer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://elevenco.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eleven co", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/prajeshElEvEn/elevenco/tree/master/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/prajeshElEvEn/elevenco/tree/master/blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "eleven co",
        logo: {
          alt: "eleven co",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Works",
          },
          { to: "/blog", label: "Blogs", position: "right" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Content",
            items: [
              {
                label: "Works",
                to: "/docs/intro",
              },
              {
                label: "Blogs",
                to: "/blog",
              },
            ],
          },
          {
            title: "Contact Me",
            items: [
              {
                label: "prajesh.eleven118@gmail.com",
                href: "mailto:prajesh.eleven118@gmail.com",
              },
              {
                label: "Github",
                href: "https://github.com/prajeshElEvEn",
              },
              {
                label: "Linked In",
                href: "https://www.linkedin.com/in/prajesh-eleven/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/prajeshElEvEn",
              },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `&copy; ${new Date().getFullYear()} eleven co`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
