// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Selvamani | Documentation Portfolio',
  tagline: 'Technical writer and docs engineer crafting clear, maintainable product documentation.',
  favicon: 'img/favicon.svg',
  url: 'https://selvamani.github.io',
  baseUrl: '/Selvamani/',
  organizationName: 'selvamani',
  projectName: 'portfolio',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/selvamani/portfolio/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Home',
      items: [
        { to: '/docs/portfolio/about-me', label: 'About Me', position: 'left' },
        { to: '/docs/intro', label: 'Portfolio', position: 'left' },
        { to: '/docs/portfolio/technical-writing', label: 'Case Studies', position: 'left' },
        { to: '/docs/portfolio/api-reference', label: 'API Reference', position: 'left'},
        { href: 'https://github.com/selvamani', label: 'GitHub', position: 'right' },
        { href: 'https://www.linkedin.com', label: 'LinkedIn', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            { label: 'Overview', to: '/docs/intro' },
            { label: 'Writing process', to: '/docs/portfolio/process' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'GitHub', href: 'https://github.com/Selva8122/Selvamani' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/selvamani-karthikeyan-5b623314a' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Selvamani. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
