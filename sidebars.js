/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'link',
      label: 'Tutorials',
      href: '#',
      className: 'sidebar-section',
    },
    'docs/README',
    { type: 'autogenerated', dirName: 'docs/tutorials' },
    {
      type: 'link',
      label: 'Recipes',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/recipes' },
    {
      type: 'link',
      label: 'References',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'docs/references' },
  ],
  quickStartSidebar: [
    'quick-start/README',
    {
      type: 'link',
      label: 'Language framework',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'quick-start/framework' },
    {
      type: 'link',
      label: 'No framework and generic',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'quick-start/generic' },
    // {
    //   type: 'link',
    //   label: '3rd party app',
    //   href: '#',
    //   className: 'sidebar-section',
    // },
    // { type: 'autogenerated', dirName: 'quick-start/third-party-app' },
    // {
    //   type: 'link',
    //   label: 'Database',
    //   href: '#',
    //   className: 'sidebar-section',
    // },
    // { type: 'autogenerated', dirName: 'quick-start/database' },
  ],
  integrationsSidebar: [
    'integrations/README',
    {
      type: 'link',
      label: 'Social connectors',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/social' },
    {
      type: 'link',
      label: 'SMS and email connectors',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/sms-and-email' },
    {
      type: 'link',
      label: 'SSO connectors',
      href: '#',
      className: 'sidebar-section',
    },
    { type: 'autogenerated', dirName: 'integrations/sso' },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
