const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Waggle Docs',
  tagline: 'AI at the Edge',
  url: 'https://docs.waggle-edge.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sage-favicon.png',
  organizationName: 'waggle-sensor',
  projectName: 'waggle-docs',
  trailingSlash: false,
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    navbar: {
      title: 'Sage',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.svg',
        className: 'custom-navbar-logo-class',
      },
      items: [
        {
          to: '/about',
          position: 'left',
          label: 'About',
        },
        {
          to: '/science',
          label: 'Science',
          position: 'left'
        },
        {
          to: '/publications',
          label: 'Publications',
          position: 'left'
        },
        {
          to: '/blog',
          label: 'News',
          position: 'left'
        },
        {
          to: '/team',
          label: 'Team',
          position: 'left'
        },
        {
          to: '/docs/about/overview',
          position: 'left',
          label: 'Docs'
        },
        /* {
          to: 'https://portal.sagecontinuum.org',
          label: 'Sage Portal',
          position: 'left'
        },*/
        {
          type: 'dropdown',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          items: [
            {
              label: 'Sage GitHub',
              href: 'https://github.com/sagecontinuum'
            },
            {
              label: 'Waggle Sensor GitHub',
              href: 'https://github.com/waggle-sensor'
            }
          ],
        }
      ],
    },
    footer: {
      /*
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: '/docs/about/overview'
            },
            {
              label: 'Tutorials',
              to: '/docs/category/tutorials'
            },
            {
              label: 'Get Support',
              to: '/docs/contact-us'
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Waggle`,
      */
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    disableSwitch: true,
    algolia: {
      apiKey: 'BH4D9OD16A',
      indexName: 'waggle-edge',
      contextualSearch: false, // mostly for versioned docs
      appId: 'MPDJQF6T11',
      searchParameters: {},    // Optional: Algolia search parameters
      apiKey: '02a5ef7ab6307c2a0a4d8c76036af3cf',
    },
    colorMode: {
      disableSwitch: true
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/waggle-sensor/waggle-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/waggle-sensor/waggle-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/tutorials/accessing-data',
            from: ['/data', '/docs/data']  // obscure fix for /data/ vs /data redirect(?)
          },
        ],
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};
