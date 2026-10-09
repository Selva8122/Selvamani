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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Home',
      items: [
        { to: '/docs/portfolio/about-me', label: 'About Me', position: 'left' },
        { to: '/docs/intro', label: 'Portfolio', position: 'left' },
        { to: '/docs/case%20studies/greenway%20health%20developer%20documentation', label: 'Case Studies', position: 'left' },
        { to: '/docs/api%20reference/getting%20started', label: 'API Reference', position: 'left' },
        { href: 'https://github.com/Selva8122/Selvamani', label: 'GitHub', position: 'right' },
        { href: 'https://linkedin.com/in/selvamani-karthikeyan-5b623314a', label: 'LinkedIn', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'Mail-selvam2836@gmail.com',
              href: 'mailto:selvam2836@gmail.com',
            },
            {
              html: 'Mobile: +91-8122135529',
            },
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
