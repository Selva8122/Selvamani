// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Selvamani | Documentation Portfolio',
  tagline: 'Technical writer and docs engineer crafting clear, maintainable product documentation.',
  favicon: 'img/favicon.svg',
  url: 'https://example.com',
  baseUrl: '/',
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
      title: 'Selvamani',
      logo: {
        alt: 'Selvamani logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Portfolio', position: 'left' },
        { to: '/docs/portfolio/technical-writing', label: 'Case Studies', position: 'left' },
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
            { label: 'GitHub', href: 'https://github.com/selvamani' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com' },
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
