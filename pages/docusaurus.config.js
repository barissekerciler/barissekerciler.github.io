/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My humble blog',
  tagline: 'Penguin!',
  url: 'https://barissekerciler.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'barissekerciler', // Usually your GitHub org/user name.
  projectName: 'barissekerciler.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My humble blog',
      logo: {
        alt: 'some default logo from doocusaurus',
        src: 'img/logo.svg',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          path: "./blog",
          routeBasePath: '/',
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
